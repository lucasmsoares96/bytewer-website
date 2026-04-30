import type { Payload } from 'payload'
import type { Media } from '@/payload-types'
import { tito } from './tito'
import { locx } from './locx'
import { ponto } from './ponto'

export async function seedProjects({
  payload,
  images,
}: {
  payload: Payload
  images: { titoImage: Media; locxImage: Media; pontoEletronicoImage: Media }
}) {
  const { titoImage, locxImage, pontoEletronicoImage } = images

  const titoData = tito({ image: titoImage })
  const titoCreated = await payload.create({
    collection: 'projects',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: titoData.pt,
  })
  await payload.update({
    collection: 'projects',
    id: titoCreated.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: titoData.en,
  })

  const locxData = locx({ image: locxImage })
  const locxCreated = await payload.create({
    collection: 'projects',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: locxData.pt,
  })
  await payload.update({
    collection: 'projects',
    id: locxCreated.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: locxData.en,
  })

  const pontoData = ponto({ image: pontoEletronicoImage })
  const pontoCreated = await payload.create({
    collection: 'projects',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: pontoData.pt,
  })
  await payload.update({
    collection: 'projects',
    id: pontoCreated.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: pontoData.en,
  })

  return {
    titoId: titoCreated.id,
    locxId: locxCreated.id,
    pontoId: pontoCreated.id,
    projectIds: [titoCreated.id, locxCreated.id, pontoCreated.id],
  }
}
