'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'border border-white/5 rounded-[2rem] overflow-hidden bg-[#0A0A0A] hover:cursor-pointer transition-all duration-500 hover:border-brand/40 hover:translate-y-[-4px]',
        className,
      )}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {metaImage && typeof metaImage !== 'string' ? (
            <Media resource={metaImage} size="33vw" className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110" />
        ) : (
            <div className="w-full h-full bg-brand/5 flex items-center justify-center">
                 <span className="text-white/10 text-4xl font-bold">Bytewer</span>
            </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-8 flex flex-col h-full">
        {showCategories && hasCategories && (
          <div className="uppercase text-[10px] font-bold tracking-widest text-brand mb-4 flex gap-2">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category
                return (
                  <span key={index} className="bg-brand/10 px-2 py-0.5 rounded border border-brand/20">
                    {titleFromCategory}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}
        {titleToUse && (
          <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight">
            <Link className="hover:text-brand transition-colors" href={href}>
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                {sanitizedDescription}
            </p>
        )}
        <div className="mt-auto flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest">
            Ler artigo
            <span>→</span>
        </div>
      </div>
    </article>
  )
}
