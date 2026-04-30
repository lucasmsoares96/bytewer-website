import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import {
  GenerateTitle,
  GenerateURL,
  GenerateDescription,
  GenerateImage,
} from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page, Post, Project } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

type SeoDoc = Partial<Post> & Partial<Page> & Partial<Project> & Record<string, unknown>

const generateTitle: GenerateTitle<Post | Page | Project> = ({ doc }) => {
  const d = doc as SeoDoc | undefined
  return d?.title ? `${d.title} | Bytewer` : 'Bytewer'
}

const generateURL: GenerateURL<Post | Page | Project> = ({ doc, locale, collectionSlug }) => {
  const baseUrl = getServerSideURL()
  const localeStr = (locale as string | undefined) ?? 'pt-BR'
  const d = doc as SeoDoc | undefined
  const slug = d?.slug
  if (!slug) return baseUrl
  if (collectionSlug === 'posts') return `${baseUrl}/${localeStr}/posts/${slug}`
  if (collectionSlug === 'projects') return `${baseUrl}/${localeStr}/projetos/${slug}`
  return `${baseUrl}/${localeStr}/${slug}`
}

const generateDescription: GenerateDescription<Post | Page | Project> = ({ doc }) => {
  const d = doc as SeoDoc | undefined
  return (d?.meta?.description as string | undefined) ?? (d?.excerpt as string | undefined) ?? ''
}

const generateImage: GenerateImage<Post | Page | Project> = ({ doc }) => {
  const d = doc as SeoDoc | undefined
  const img = d?.meta?.image ?? d?.heroImage ?? d?.image ?? null
  if (img == null) return ''
  if (typeof img === 'number' || typeof img === 'string') return img
  if (typeof img === 'object' && img !== null && 'id' in img) {
    return (img as { id: number | string }).id
  }
  return ''
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
    generateDescription,
    generateImage,
    interfaceName: 'PageMeta',
    fields: ({ defaultFields }) => [
      ...defaultFields,
      {
        name: 'noindex',
        type: 'checkbox',
        label: 'Hide from search engines (noindex)',
        defaultValue: false,
        admin: {
          description: 'When enabled, robots meta will be set to noindex,nofollow.',
        },
      },
    ],
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  vercelBlobStorage({
    enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
    collections: {
      media: true,
    },
    token: process.env.BLOB_READ_WRITE_TOKEN || '',
  }),
]
