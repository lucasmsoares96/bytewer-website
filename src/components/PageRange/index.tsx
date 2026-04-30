import React from 'react'
import type { TypedLocale } from 'payload'

const defaultLabels = {
  'pt-BR': { plural: 'Docs', singular: 'Doc' },
  en: { plural: 'Docs', singular: 'Doc' },
}

const defaultCollectionLabels = {
  posts: {
    'pt-BR': { plural: 'Posts', singular: 'Post' },
    en: { plural: 'Posts', singular: 'Post' },
  },
}

export const PageRange: React.FC<{
  className?: string
  collection?: keyof typeof defaultCollectionLabels
  collectionLabels?: {
    plural?: string
    singular?: string
  }
  currentPage?: number
  limit?: number
  locale?: TypedLocale
  totalDocs?: number
}> = (props) => {
  const {
    className,
    collection,
    collectionLabels: collectionLabelsFromProps,
    currentPage,
    limit,
    locale,
    totalDocs,
  } = props
  const isEn = String(locale) === 'en'
  const localeKey: 'pt-BR' | 'en' = isEn ? 'en' : 'pt-BR'

  let indexStart = (currentPage ? currentPage - 1 : 1) * (limit || 1) + 1
  if (totalDocs && indexStart > totalDocs) indexStart = 0

  let indexEnd = (currentPage || 1) * (limit || 1)
  if (totalDocs && indexEnd > totalDocs) indexEnd = totalDocs

  const { plural, singular } =
    collectionLabelsFromProps ||
    (collection ? defaultCollectionLabels[collection][localeKey] : undefined) ||
    defaultLabels[localeKey] ||
    {}

  const noResults = isEn ? 'Search produced no results.' : 'A busca não retornou resultados.'
  const showing = isEn ? 'Showing' : 'Mostrando'
  const of = isEn ? 'of' : 'de'

  return (
    <div className={[className, 'font-semibold'].filter(Boolean).join(' ')}>
      {(typeof totalDocs === 'undefined' || totalDocs === 0) && noResults}
      {typeof totalDocs !== 'undefined' &&
        totalDocs > 0 &&
        `${showing} ${indexStart}${indexStart > 0 ? ` - ${indexEnd}` : ''} ${of} ${totalDocs} ${
          totalDocs > 1 ? plural : singular
        }`}
    </div>
  )
}
