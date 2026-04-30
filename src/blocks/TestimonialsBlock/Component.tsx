import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'
import type { TypedLocale } from 'payload'
import { TestimonialsBlockClient } from './Component.client'
import JsonLd from '@/components/JsonLd'
import { buildReviewLd } from '@/utilities/jsonLd'
import { getSiteSEO } from '@/utilities/getSiteSEO'

type Props = TestimonialsBlockType & { locale?: TypedLocale }

export const TestimonialsBlockComponent: React.FC<Props> = async ({ badge, heading, subtitle, locale }) => {
  const payload = await getPayload({ config: configPromise })

  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    sort: 'order',
    locale: locale ?? 'pt-BR',
  })

  if (testimonials.length === 0) return null

  const seo = await getSiteSEO(locale)
  const itemReviewedName = seo.siteName ?? 'Bytewer'

  // Client component reads `data.heading` for the small badge label and
  // `data.subtitle` for the H2 — map block fields accordingly.
  const data = {
    heading: badge,
    subtitle: heading,
    testimonials: testimonials.map(t => ({
        quote: t.quote,
        author: t.author,
        role: t.role
    }))
  }

  return (
    <>
      <TestimonialsBlockClient data={data as any} />
      {testimonials.map((t, index) =>
        t?.author && t?.quote ? (
          <JsonLd
            key={`review-ld-${index}`}
            data={buildReviewLd({
              author: t.author,
              reviewBody: t.quote,
              itemReviewedName,
            })}
          />
        ) : null,
      )}
    </>
  )
}

export default TestimonialsBlockComponent
