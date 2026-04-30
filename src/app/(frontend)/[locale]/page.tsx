import type { Metadata } from 'next'
import { buildPageMetadata, renderPage } from './_render-page'

type Args = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Args) {
  const { locale } = await params
  return renderPage({ slug: 'home', locale })
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale } = await params
  return buildPageMetadata({ slug: 'home', locale })
}
