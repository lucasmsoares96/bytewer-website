import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

type SitemapEntry = {
  path: string
  lastmod: string
}

const LOCALES = ['pt-BR', 'en'] as const
const DEFAULT_LOCALE = 'pt-BR'

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const buildXml = (entries: SitemapEntry[], siteUrl: string) => {
  const urls = entries
    .map(({ path, lastmod }) => {
      return LOCALES.map((locale) => {
        const loc = `${siteUrl}/${locale}${path}`
        const alternates = LOCALES.map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt}" href="${escapeXml(
              `${siteUrl}/${alt}${path}`,
            )}"/>`,
        ).join('\n')
        const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
          `${siteUrl}/${DEFAULT_LOCALE}${path}`,
        )}"/>`
        return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
${alternates}
${xDefault}
  </url>`
      }).join('\n')
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`
}

const getProjectsSitemap = unstable_cache(
  async (): Promise<SitemapEntry[]> => {
    const payload = await getPayload({ config })

    const results = await payload.find({
      collection: 'projects',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap: SitemapEntry[] = results.docs
      ? results.docs
          .filter((project) => Boolean(project?.slug))
          .map((project) => ({
            path: `/projetos/${project?.slug}`,
            lastmod: project.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['projects-sitemap'],
  {
    tags: ['projects-sitemap'],
  },
)

export async function GET() {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    'https://example.com'

  const entries = await getProjectsSitemap()
  const xml = buildXml(entries, SITE_URL)

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
