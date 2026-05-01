import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

export const revalidateTeam: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating home pages after team member change: ${doc.name}`)
    revalidatePath('/pt-BR')
    revalidatePath('/en')
  }
  return doc
}

export const revalidateDeleteTeam: CollectionAfterDeleteHook = ({ doc, req: { context, payload } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating home pages after team member delete: ${doc?.name}`)
    revalidatePath('/pt-BR')
    revalidatePath('/en')
  }
  return doc
}
