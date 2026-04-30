import type { Payload } from 'payload'
import type { Media } from '@/payload-types'
import { buildHomeLayoutPt } from './layout-pt'
import { localizeHomeLayout } from './localize'
import { homeEn } from './translations-en'

export async function seedHome({
  payload,
  bgDetalhe,
  ogBannerMedia,
  projectIds,
}: {
  payload: Payload
  bgDetalhe: Media
  ogBannerMedia: Media
  projectIds: (number | string)[]
}) {
  const homeLayoutPt = buildHomeLayoutPt({ projectIds })

  const homePagePt = await payload.create({
    collection: 'pages',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: {
      title: 'Home',
      slug: 'home',
      _status: 'published',
      hero: {
        type: 'bytewer',
        title: 'Leve seu negócio para o',
        titleHighlight: 'próximo nível',
        subtitle: 'Transformamos Ideias em Soluções Inteligentes',
        description:
          'Criamos aplicações multiplataforma e automações com IA para agilizar processos e atingir um novo patamar de eficiência.',
        primaryCta: { label: 'Falar com Especialista', href: '/#contact' },
        secondaryCta: { label: 'Ver Projetos', href: '/#portfolio' },
        backgroundImage: bgDetalhe.id,
      },
      meta: {
        title: 'Bytewer — Soluções inteligentes para o seu negócio digital',
        description:
          'Estúdio de software que constrói automações com IA, apps multiplataforma e venture building. Transforme sua operação com a Bytewer.',
        image: ogBannerMedia.id,
      },
      layout: homeLayoutPt as any,
    },
  })

  const homeLayoutEn = localizeHomeLayout(homePagePt.layout as any[])

  await payload.update({
    collection: 'pages',
    id: homePagePt.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: {
      title: 'Home',
      hero: {
        type: 'bytewer',
        title: homeEn.hero.title,
        titleHighlight: homeEn.hero.titleHighlight,
        subtitle: homeEn.hero.subtitle,
        description: homeEn.hero.description,
        primaryCta: { label: homeEn.hero.primaryCtaLabel, href: '/#contact' },
        secondaryCta: { label: homeEn.hero.secondaryCtaLabel, href: '/#portfolio' },
        backgroundImage: bgDetalhe.id,
      },
      meta: {
        title: 'Bytewer — Smart software solutions for your business',
        description:
          'Software studio building AI automations, multi-platform apps and venture building. Transform your operations with Bytewer.',
        image: ogBannerMedia.id,
      },
      layout: homeLayoutEn as any,
    },
  })
}
