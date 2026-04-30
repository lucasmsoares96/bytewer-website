import type { Payload } from 'payload'
import type { Media } from '@/payload-types'
import { buildNicheLayout, localizeNicheLayout } from './build-layout'
import { contactChannelsPt, niches } from './data'
import type { NicheVariant } from '../../types'

const buildNicheHero = ({
  v,
  bgDetalhe,
}: {
  v: NicheVariant
  bgDetalhe: Media
}) => ({
  type: 'bytewer' as const,
  title: v.hero.title,
  titleHighlight: v.hero.titleHighlight,
  subtitle: v.hero.tagline,
  description: v.hero.description,
  primaryCta: { label: v.hero.ctaLabel, href: '#contact' },
  backgroundImage: bgDetalhe.id,
})

export async function seedNiches({
  payload,
  bgDetalhe,
  ogBannerMedia,
}: {
  payload: Payload
  bgDetalhe: Media
  ogBannerMedia: Media
}) {
  for (const n of niches) {
    const created = await payload.create({
      collection: 'pages',
      locale: 'pt-BR',
      context: { disableRevalidate: true },
      data: {
        title: n.pt.title,
        slug: n.slug,
        _status: 'published',
        hero: buildNicheHero({ v: n.pt, bgDetalhe }),
        meta: {
          title: n.pt.seo.title,
          description: n.pt.seo.description,
          image: ogBannerMedia.id,
        },
        layout: buildNicheLayout({ n, v: n.pt, channels: contactChannelsPt }) as any,
      },
    })
    await payload.update({
      collection: 'pages',
      id: created.id,
      locale: 'en',
      context: { disableRevalidate: true },
      data: {
        title: n.en.title,
        hero: buildNicheHero({ v: n.en, bgDetalhe }),
        meta: {
          title: n.en.seo.title,
          description: n.en.seo.description,
          image: ogBannerMedia.id,
        },
        layout: localizeNicheLayout({
          createdLayout: created.layout as any[],
          n,
          en: n.en,
        }) as any,
      },
    })
  }
}
