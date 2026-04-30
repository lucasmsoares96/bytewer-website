import type { Metadata } from 'next'
import type { TypedLocale } from 'payload'

import type { Media, Page, Post, Project, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'
import { getSiteSEO } from './getSiteSEO'

type OGImage = {
  url: string
  width?: number
  height?: number
  alt?: string
}

const SUPPORTED_LOCALES = ['pt-BR', 'en'] as const
const DEFAULT_LOCALE: (typeof SUPPORTED_LOCALES)[number] = 'pt-BR'

const OG_LOCALE_MAP: Record<string, string> = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
}

const getImageURL = (
  image?: Media | Config['db']['defaultIDType'] | null,
): OGImage | undefined => {
  if (!image || typeof image !== 'object' || !('url' in image)) return undefined
  const serverUrl = getServerSideURL()
  const ogSize = image.sizes?.og
  const path = ogSize?.url || image.url
  if (!path) return undefined
  return {
    url: serverUrl + path,
    width: ogSize?.width ?? image.width ?? undefined,
    height: ogSize?.height ?? image.height ?? undefined,
    alt: image.alt ?? undefined,
  }
}

const buildPath = (locale: string, segments: string[]) => {
  const cleaned = segments.filter(Boolean)
  return cleaned.length ? `/${locale}/${cleaned.join('/')}` : `/${locale}`
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | Partial<Project> | null
  locale?: TypedLocale
  pathSegments?: string[]
}): Promise<Metadata> => {
  const { doc, locale, pathSegments = [] } = args
  const seo = await getSiteSEO(locale)
  const serverUrl = getServerSideURL()

  const activeLocale = (locale as string) || DEFAULT_LOCALE

  const docImage = getImageURL(doc?.meta?.image)
  const ogImage: OGImage | undefined =
    docImage ?? (seo.ogImageUrl ? { url: seo.ogImageUrl } : undefined)

  const siteName = seo.siteName ?? seo.metaTitle ?? undefined
  const baseTitle = seo.metaTitle ?? siteName

  const title = doc?.meta?.title
    ? siteName
      ? `${doc.meta.title} | ${siteName}`
      : doc.meta.title
    : baseTitle

  const description = doc?.meta?.description || seo.metaDescription || ''

  const canonicalUrl = `${serverUrl}${buildPath(activeLocale, pathSegments)}`

  const languages: Record<string, string> = {}
  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = `${serverUrl}${buildPath(loc, pathSegments)}`
  }
  languages['x-default'] = `${serverUrl}${buildPath(DEFAULT_LOCALE, pathSegments)}`

  const ogType: 'article' | 'website' =
    doc && 'publishedAt' in doc && (doc as { publishedAt?: unknown }).publishedAt
      ? 'article'
      : 'website'

  const ogImages = ogImage
    ? [
        {
          url: ogImage.url,
          ...(ogImage.width ? { width: ogImage.width } : {}),
          ...(ogImage.height ? { height: ogImage.height } : {}),
          ...(ogImage.alt ? { alt: ogImage.alt } : {}),
        },
      ]
    : undefined

  const noindex = Boolean((doc?.meta as { noindex?: boolean } | undefined)?.noindex)

  const metadata: Metadata = {
    description,
    title,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: mergeOpenGraph({
      type: ogType,
      siteName,
      description,
      images: ogImages,
      title: typeof title === 'string' ? title : undefined,
      url: canonicalUrl,
      locale: OG_LOCALE_MAP[activeLocale] ?? activeLocale,
    }),
    twitter: {
      card: 'summary_large_image',
      title: typeof title === 'string' ? title : undefined,
      description,
      images: ogImages,
    },
  }

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    }
  }

  return metadata
}
