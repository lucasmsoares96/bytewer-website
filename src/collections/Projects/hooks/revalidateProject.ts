import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Project } from '../../../payload-types'

const LOCALES = ['pt-BR', 'en'] as const

const projectPaths = (slug: string | null | undefined): string[] => {
  if (!slug) return []
  return LOCALES.map((locale) => `/${locale}/projetos/${slug}`)
}

export const revalidateProject: CollectionAfterChangeHook<Project> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      for (const path of projectPaths(doc.slug)) {
        payload.logger.info(`Revalidating project at path: ${path}`)
        revalidatePath(path)
      }
      revalidateTag('projects', 'max')
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      for (const path of projectPaths(previousDoc.slug)) {
        payload.logger.info(`Revalidating unpublished project at path: ${path}`)
        revalidatePath(path)
      }
      revalidateTag('projects', 'max')
    }
  }
  return doc
}

export const revalidateProjectDelete: CollectionAfterDeleteHook<Project> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    for (const path of projectPaths(doc?.slug)) {
      revalidatePath(path)
    }
    revalidateTag('projects', 'max')
  }
  return doc
}
