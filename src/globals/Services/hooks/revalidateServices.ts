import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateServices: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating services global`)
    revalidateTag('global_services', 'max')
    revalidateTag('global_services_pt-BR', 'max')
    revalidateTag('global_services_en', 'max')
  }
  return doc
}
