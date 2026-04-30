import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug, type TypedLocale } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cn } from '@/utilities/ui'
import { homeStatic } from '@/endpoints/seed/home-static'
import PageClient from './page.client'

export const queryPageBySlug = cache(
  async ({ slug, locale }: { slug: string; locale?: TypedLocale }) => {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      ...(locale ? { locale } : {}),
      where: { slug: { equals: slug } },
    })
    return result.docs?.[0] || null
  },
)

export async function renderPage({ slug, locale }: { slug: string; locale?: string }) {
  const { isEnabled: draft } = await draftMode()
  const typedLocale = locale as TypedLocale | undefined
  const decodedSlug = decodeURIComponent(slug)
  const url = decodedSlug === 'home' ? '/' : '/' + decodedSlug

  let page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug: decodedSlug,
    locale: typedLocale,
  })

  if (!page && decodedSlug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page
  const isBytewerLayout = Array.isArray(layout) && layout.length > 0
  const hasFullBleedHero = Boolean(hero?.type && hero.type !== 'none')

  return (
    <article
      className={cn(
        isBytewerLayout ? 'bg-bytewer-bg text-white' : 'pt-16 pb-24',
        isBytewerLayout && !hasFullBleedHero && 'pt-24 md:pt-32',
      )}
    >
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} locale={typedLocale} />
    </article>
  )
}

export async function buildPageMetadata({
  slug,
  locale,
}: {
  slug: string
  locale?: string
}): Promise<Metadata> {
  const typedLocale = locale as TypedLocale | undefined
  const decodedSlug = decodeURIComponent(slug)
  const page = await queryPageBySlug({ slug: decodedSlug, locale: typedLocale })
  return generateMeta({
    doc: page,
    locale: typedLocale,
    pathSegments: decodedSlug === 'home' ? [] : [decodedSlug],
  })
}
