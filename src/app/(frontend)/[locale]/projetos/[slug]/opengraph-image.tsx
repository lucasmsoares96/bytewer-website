import { ImageResponse } from 'next/og'
import configPromise from '@payload-config'
import { getPayload, type TypedLocale } from 'payload'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Bytewer'

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  let title: string | null = null
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'projects',
      limit: 1,
      pagination: false,
      locale: locale as TypedLocale,
      where: { slug: { equals: decodedSlug } },
    })
    title = result.docs?.[0]?.title ?? null
  } catch {
    title = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          padding: '72px',
        }}
      >
        {title ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#34D399',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 24,
                }}
              >
                Case study
              </div>
              <div
                style={{
                  fontSize: 84,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#FFFFFF',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {title}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                fontWeight: 500,
                color: '#9CA3AF',
                letterSpacing: '-0.01em',
              }}
            >
              Bytewer
            </div>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              fontSize: 220,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            Bytewer
          </div>
        )}
      </div>
    ),
    { ...size },
  )
}
