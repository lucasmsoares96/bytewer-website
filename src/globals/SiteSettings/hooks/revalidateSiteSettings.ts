import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateSiteSettings: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating siteSettings global`)
    revalidateTag('global_siteSettings', 'max')
    revalidateTag('global_siteSettings_pt-BR', 'max')
    revalidateTag('global_siteSettings_en', 'max')
  }
  return doc
}
