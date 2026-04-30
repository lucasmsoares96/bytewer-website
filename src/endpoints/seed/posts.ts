import type { Payload } from 'payload'
import type { Media, User } from '@/payload-types'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

export async function seedPosts({
  payload,
  author,
  images,
}: {
  payload: Payload
  author: User
  images: { imageHero1: Media; imagePost1: Media; imagePost2: Media; imagePost3: Media }
}) {
  const { imageHero1, imagePost1, imagePost2, imagePost3 } = images

  const post1Pt = await payload.create({
    collection: 'posts',
    context: { disableRevalidate: true },
    locale: 'pt-BR',
    data: post1({ author: author.id as any, heroImage: imageHero1, blockImage: imagePost1, locale: 'pt-BR' }),
  })
  await payload.update({
    collection: 'posts',
    id: post1Pt.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: post1({ author: author.id as any, heroImage: imageHero1, blockImage: imagePost1, locale: 'en' }),
  })

  const post2Pt = await payload.create({
    collection: 'posts',
    context: { disableRevalidate: true },
    locale: 'pt-BR',
    data: post2({ author: author.id as any, heroImage: imagePost2, blockImage: imagePost3, locale: 'pt-BR' }),
  })
  await payload.update({
    collection: 'posts',
    id: post2Pt.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: post2({ author: author.id as any, heroImage: imagePost2, blockImage: imagePost3, locale: 'en' }),
  })

  const post3Pt = await payload.create({
    collection: 'posts',
    context: { disableRevalidate: true },
    locale: 'pt-BR',
    data: post3({ author: author.id as any, heroImage: imagePost3, blockImage: imagePost2, locale: 'pt-BR' }),
  })
  await payload.update({
    collection: 'posts',
    id: post3Pt.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: post3({ author: author.id as any, heroImage: imagePost3, blockImage: imagePost2, locale: 'en' }),
  })
}
