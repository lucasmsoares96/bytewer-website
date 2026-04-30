import React from 'react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { ServicesBlock as ServicesBlockType } from '@/payload-types'
import type { TypedLocale } from 'payload'
import { ServicesBlockClient } from './Component.client'
import JsonLd from '@/components/JsonLd'
import { buildServiceLd } from '@/utilities/jsonLd'
import { getSiteSEO } from '@/utilities/getSiteSEO'
import { getServerSideURL } from '@/utilities/getURL'

type Props = ServicesBlockType & { locale?: TypedLocale }

export const ServicesBlockComponent: React.FC<Props> = async ({ anchor, locale }) => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({
    slug: 'services',
    depth: 1,
    locale: locale ?? 'pt-BR',
  })

  if (!data) return null

  const seo = await getSiteSEO(locale)
  const providerName = seo.siteName ?? 'Bytewer'
  const providerUrl = getServerSideURL()
  const items = ((data as unknown as { items?: Array<{ title?: string | null; description?: string | null }> }).items) ?? []

  return (
    <>
      <ServicesBlockClient anchor={anchor} data={data} />
      {items.map((item, index) =>
        item?.title ? (
          <JsonLd
            key={`service-ld-${index}`}
            data={buildServiceLd({
              name: item.title,
              description: item.description ?? undefined,
              providerName,
              providerUrl,
            })}
          />
        ) : null,
      )}
    </>
  )
}

export default ServicesBlockComponent
