import type { TypedLocale } from 'payload'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getServerSideURL } from './getURL'

export type SiteSEO = {
  siteName?: string
  metaTitle?: string
  metaDescription?: string
  ogImageUrl?: string
  faviconUrl?: string
  faviconMimeType?: string
  twitterHandle?: string
}

const absolute = (url?: string | null) => {
  if (!url) return undefined
  if (/^https?:\/\//i.test(url)) return url
  return `${getServerSideURL()}${url}`
}

export async function getSiteSEO(locale?: TypedLocale): Promise<SiteSEO> {
  try {
    const payload = await getPayload({ config: configPromise })
    const settings = await payload.findGlobal({
      slug: 'siteSettings',
      depth: 1,
      locale,
    })
    const seo = settings?.seo
    if (!seo) return {}

    const ogMedia = typeof seo.ogImage === 'object' ? seo.ogImage : null
    const ogUrl = ogMedia?.sizes?.og?.url ?? ogMedia?.url
    const faviconMedia = typeof seo.favicon === 'object' ? seo.favicon : null

    return {
      siteName: seo.siteName ?? undefined,
      metaTitle: seo.metaTitle ?? undefined,
      metaDescription: seo.metaDescription ?? undefined,
      ogImageUrl: absolute(ogUrl),
      faviconUrl: absolute(faviconMedia?.url),
      faviconMimeType: faviconMedia?.mimeType ?? undefined,
      twitterHandle: seo.twitterHandle ?? undefined,
    }
  } catch {
    return {}
  }
}
