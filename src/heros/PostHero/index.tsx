import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

const intlLocaleFor = (locale?: string) => (locale === 'pt-BR' ? 'pt-BR' : 'en-US')

const formatPublishedAt = (timestamp: string, locale?: string): string => {
  try {
    return new Intl.DateTimeFormat(intlLocaleFor(locale), {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(timestamp))
  } catch {
    return ''
  }
}

export const PostHero: React.FC<{
  post: Post
  locale?: string
}> = ({ post, locale }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''
  const isPt = locale === 'pt-BR'
  const authorLabel = isPt ? 'Autor' : 'Author'
  const dateLabel = isPt ? 'Publicado em' : 'Date Published'

  return (
    <div className="relative -mt-[10.4rem] flex items-end">
      <div className="container px-4 md:px-8 z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="uppercase text-sm mb-6">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <div className="">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {hasAuthors && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-white/60">{authorLabel}</p>

                  <p className="font-medium">{formatAuthors(populatedAuthors)}</p>
                </div>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">{dateLabel}</p>

                <time className="font-medium" dateTime={publishedAt}>
                  {formatPublishedAt(publishedAt, locale)}
                </time>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
