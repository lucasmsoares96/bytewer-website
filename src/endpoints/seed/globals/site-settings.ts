import type { Payload } from 'payload'
import type { Media } from '@/payload-types'

export async function seedSiteSettings({
  payload,
  logoMedia,
  logoLightMedia,
  faviconMedia,
  ogBannerMedia,
}: {
  payload: Payload
  logoMedia: Media
  logoLightMedia: Media
  faviconMedia: Media
  ogBannerMedia: Media
}) {
  await payload.updateGlobal({
    slug: 'siteSettings',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: {
      logo: logoMedia.id,
      logoLight: logoLightMedia.id,
      tagline: 'Smart Solutions for Business',
      seo: {
        siteName: 'Bytewer',
        metaTitle: 'Bytewer — Soluções Inteligentes para o seu Negócio Digital',
        metaDescription:
          'Automação com IA, aplicativos multiplataforma, consultoria de inovação e venture building. Transforme seu negócio com a Bytewer.',
        ogImage: ogBannerMedia.id,
        favicon: faviconMedia.id,
        twitterHandle: '@bytewer',
      },
      socials: {
        linkedin: 'https://linkedin.com/company/bytewer',
        instagram: 'https://instagram.com/bytewer',
        youtube: 'https://youtube.com/@bytewer',
        twitter: 'https://x.com/bytewer',
        github: 'https://github.com/bytewer',
        reddit: 'https://www.reddit.com/user/Bytewer-lab/',
      },
    },
  })

  await payload.updateGlobal({
    slug: 'siteSettings',
    locale: 'en',
    context: { disableRevalidate: true },
    data: {
      tagline: 'Smart Solutions for Business',
      seo: {
        siteName: 'Bytewer',
        metaTitle: 'Bytewer — Smart Software Solutions for Your Business',
        metaDescription:
          'AI automations, multi-platform apps, innovation consulting and venture building. Transform your business with Bytewer.',
      },
    },
  })
}
