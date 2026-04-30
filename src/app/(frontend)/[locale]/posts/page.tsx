import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload, type TypedLocale } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { generateMeta } from '@/utilities/generateMeta'

type MetadataArgs = {
  params: Promise<{ locale?: string }>
}

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{ locale?: string }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { locale } = (await paramsPromise) ?? {}
  const typedLocale = locale as TypedLocale | undefined
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    ...(typedLocale ? { locale: typedLocale } : {}),
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
    },
  })

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          locale={typedLocale}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: MetadataArgs): Promise<Metadata> {
  const { locale } = (await paramsPromise) ?? {}
  const typedLocale = locale as TypedLocale | undefined
  return generateMeta({ doc: null, locale: typedLocale, pathSegments: ['posts'] })
}
