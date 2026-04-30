import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { redirect } from 'next/navigation'

import { buildPageMetadata, renderPage } from '../_render-page'
import { SUPPORTED_LOCALES } from '../layout'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  const params: { locale: string; slug: string }[] = []
  for (const locale of SUPPORTED_LOCALES) {
    pages.docs
      ?.filter((doc) => doc.slug && doc.slug !== 'home')
      .forEach((doc) => {
        params.push({ locale, slug: doc.slug as string })
      })
  }
  return params
}

type Args = {
  params: Promise<{ locale: string; slug: string }>
}

export default async function Page({ params }: Args) {
  const { locale, slug } = await params
  if (decodeURIComponent(slug) === 'home') redirect(`/${locale}`)
  return renderPage({ slug, locale })
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale, slug } = await params
  if (decodeURIComponent(slug) === 'home') return {}
  return buildPageMetadata({ slug, locale })
}
