import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest } from 'payload'

import { seedMedia } from './media'
import { seedServices } from './globals/services'
import { seedToolbox } from './globals/toolbox'
import { seedSiteSettings } from './globals/site-settings'
import { seedTeam } from './team'
import { seedTestimonials } from './testimonials'
import { seedProjects } from './projects'
import { seedPosts } from './posts'
import { seedHome } from './pages/home'
import { seedNiches } from './pages/niches'
import { seedLegal } from './pages/legal'
import { seedNav } from './nav'

const collections: CollectionSlug[] = [
  'pages',
  'posts',
  'projects',
  'categories',
  'team',
  'testimonials',
  'media',
]

const globals: GlobalSlug[] = ['header', 'footer']

async function clearDb(payload: Payload, req: PayloadRequest) {
  payload.logger.info('— Bytewer seed: clearing existing content...')

  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: { navItems: [] } as never,
        depth: 0,
        context: { disableRevalidate: true },
      }),
    ),
  )

  for (const collection of collections) {
    await payload.db.deleteMany({ collection, req, where: {} })
  }

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection]?.config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: { email: { equals: 'demo-author@example.com' } },
    context: { disableRevalidate: true },
  })
}

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  await clearDb(payload, req)

  payload.logger.info('— Uploading media...')
  const media = await seedMedia({ payload })

  const author = await payload.create({
    collection: 'users',
    data: {
      name: 'Demo Author',
      email: 'demo-author@example.com',
      password: 'password',
    },
  })

  payload.logger.info('— Seeding globals (services, toolbox, siteSettings)...')
  await seedServices({ payload })
  await seedToolbox({ payload, n8nLogo: media.n8nLogo, evolutionLogo: media.evolutionLogo })
  await seedSiteSettings({
    payload,
    logoMedia: media.logoMedia,
    logoLightMedia: media.logoLightMedia,
    faviconMedia: media.faviconMedia,
    ogBannerMedia: media.ogBannerMedia,
  })

  payload.logger.info('— Seeding team members...')
  await seedTeam({
    payload,
    photos: {
      teamLucas: media.teamLucas,
      teamSavio: media.teamSavio,
      teamJorge: media.teamJorge,
      teamVictor: media.teamVictor,
    },
  })

  payload.logger.info('— Seeding testimonials...')
  await seedTestimonials({ payload })

  payload.logger.info('— Seeding projects...')
  const { projectIds } = await seedProjects({
    payload,
    images: {
      titoImage: media.titoImage,
      locxImage: media.locxImage,
      pontoEletronicoImage: media.pontoEletronicoImage,
    },
  })

  payload.logger.info('— Seeding posts...')
  await seedPosts({
    payload,
    author,
    images: {
      imageHero1: media.imageHero1,
      imagePost1: media.imagePost1,
      imagePost2: media.imagePost2,
      imagePost3: media.imagePost3,
    },
  })

  payload.logger.info('— Seeding home page...')
  await seedHome({
    payload,
    bgDetalhe: media.bgDetalhe,
    ogBannerMedia: media.ogBannerMedia,
    projectIds,
  })

  payload.logger.info('— Seeding niche landing pages...')
  await seedNiches({ payload, bgDetalhe: media.bgDetalhe, ogBannerMedia: media.ogBannerMedia })

  payload.logger.info('— Seeding legal pages...')
  await seedLegal({ payload, ogBannerMedia: media.ogBannerMedia })

  payload.logger.info('— Updating header/footer navItems...')
  await seedNav({ payload })

  payload.logger.info('Bytewer database seeded successfully!')
}
