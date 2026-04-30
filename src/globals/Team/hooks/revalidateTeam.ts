import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateTeam: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating team global`)
    revalidateTag('global_team', 'max')
    revalidateTag('global_team_pt-BR', 'max')
    revalidateTag('global_team_en', 'max')
  }
  return doc
}
