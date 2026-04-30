import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type TypedLocale } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post, Media } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import { JsonLd } from '@/components/JsonLd'
import { buildArticleLd, buildBreadcrumbLd } from '@/utilities/jsonLd'
import { getServerSideURL } from '@/utilities/getURL'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    locale?: string
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '', locale } = await paramsPromise
  const typedLocale = locale as TypedLocale | undefined
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug, locale: typedLocale })

  if (!post) return <PayloadRedirects url={url} />

  const serverUrl = getServerSideURL()
  const localeSegment = locale ?? 'pt-BR'
  const canonicalUrl = `${serverUrl}/${localeSegment}/posts/${decodedSlug}`
  const heroImage =
    post.heroImage && typeof post.heroImage === 'object' ? (post.heroImage as Media) : null
  const metaImage =
    post.meta?.image && typeof post.meta.image === 'object' ? (post.meta.image as Media) : null
  const articleImagePath = heroImage?.url ?? metaImage?.url ?? undefined
  const articleImageUrl = articleImagePath
    ? articleImagePath.startsWith('http')
      ? articleImagePath
      : `${serverUrl}${articleImagePath}`
    : undefined
  const authorName =
    Array.isArray(post.populatedAuthors) && post.populatedAuthors[0]?.name
      ? post.populatedAuthors[0].name
      : undefined
  const articleLd = buildArticleLd({
    url: canonicalUrl,
    title: post.title ?? '',
    description: post.meta?.description ?? undefined,
    imageUrl: articleImageUrl,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? undefined,
    authorName,
  })
  const breadcrumbLd = buildBreadcrumbLd([
    { name: 'Home', url: `${serverUrl}/${localeSegment}` },
    { name: 'Blog', url: `${serverUrl}/${localeSegment}/posts` },
    { name: post.title ?? '', url: canonicalUrl },
  ])

  return (
    <article className="pt-16 pb-16">
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} locale={localeSegment} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container px-4 md:px-8">
          <RichText className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} />
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise
  const typedLocale = locale as TypedLocale | undefined
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug, locale: typedLocale })

  return generateMeta({ doc: post, locale: typedLocale })
}

const queryPostBySlug = cache(
  async ({ slug, locale }: { slug: string; locale?: TypedLocale }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'posts',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      ...(locale ? { locale } : {}),
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)
