import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateToolbox: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating toolbox global`)
    revalidateTag('global_toolbox', 'max')
    revalidateTag('global_toolbox_pt-BR', 'max')
    revalidateTag('global_toolbox_en', 'max')
  }
  return doc
}
