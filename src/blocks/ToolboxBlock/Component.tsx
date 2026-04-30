import React from 'react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { ToolboxBlock as ToolboxBlockType } from '@/payload-types'
import type { TypedLocale } from 'payload'
import { ToolboxBlockClient } from './Component.client'

type Props = ToolboxBlockType & { locale?: TypedLocale }

export const ToolboxBlockComponent: React.FC<Props> = async ({ anchor, locale }) => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({
    slug: 'toolbox',
    depth: 2,
    locale: locale ?? 'pt-BR',
  })

  if (!data) return null

  return <ToolboxBlockClient anchor={anchor} data={data} />
}

export default ToolboxBlockComponent
