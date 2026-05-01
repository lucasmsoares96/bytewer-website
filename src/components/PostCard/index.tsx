'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Calendar, User } from 'lucide-react'

import type { Media, Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'

export type PostCardData = Pick<Post, 'id' | 'slug' | 'title' | 'meta' | 'publishedAt'>

export const PostCard: React.FC<{ post: PostCardData }> = ({ post }) => {
  const metaImage =
    typeof post.meta?.image === 'object' ? (post.meta.image as Media | null) : null

  const pathname = usePathname()
  const locale = pathname?.startsWith('/en') ? 'en' : 'pt-BR'
  const isEn = locale === 'en'

  return (
    <Link
      href={`/${locale}/posts/${post.slug}`}
      className="group flex flex-col bg-[#0A0A0A] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand/40 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {metaImage?.url ? (
          <Image
            src={metaImage.url}
            alt={metaImage.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-brand/5 flex items-center justify-center">
            <span className="text-white/10 text-4xl font-bold">Bytewer</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-brand group-hover:border-brand group-hover:scale-110">
          <ArrowUpRight size={20} />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-brand/60" />
            {post.publishedAt ? formatDateTime(post.publishedAt) : isEn ? 'Recent' : 'Recente'}
          </div>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-brand/60" />
            Bytewer Team
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base line-clamp-3 mb-6 flex-1">
          {post.meta?.description ||
            (isEn
              ? 'Click to read more about this article and stay updated on Bytewer news.'
              : 'Clique para ler mais sobre este artigo e ficar por dentro das novidades da Bytewer.')}
        </p>

        <div className="flex items-center gap-2 text-brand font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
          {isEn ? 'Read full article' : 'Ler artigo completo'}
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}
