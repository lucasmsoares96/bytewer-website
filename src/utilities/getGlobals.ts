import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { type DataFromGlobalSlug, type TypedLocale, getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

async function getGlobal<T extends Global>(
  slug: T,
  depth = 0,
  locale?: TypedLocale,
): Promise<DataFromGlobalSlug<T>> {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  })

  return global as DataFromGlobalSlug<T>
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug + locale.
 */
export const getCachedGlobal = <T extends Global>(slug: T, depth = 0, locale?: TypedLocale) =>
  unstable_cache(async () => getGlobal<T>(slug, depth, locale), [slug, locale ?? 'default'], {
    tags: [`global_${slug}`, locale ? `global_${slug}_${locale}` : `global_${slug}_default`],
  })
