'use client'
import React from 'react'
import Link from 'next/link'
import type { Post } from '@/payload-types'
import { PostCard } from '@/components/PostCard'

export const BlogBlockClient: React.FC<{
  anchor?: string | null
  badge?: string | null
  heading?: string | null
  headingHighlight?: string | null
  subtitle?: string | null
  posts: Post[]
}> = ({ anchor, badge, heading, headingHighlight, subtitle, posts }) => {
  if (posts.length === 0) return null

  return (
    <section 
      id={anchor || 'blog'} 
      className="py-24 md:py-32 bg-[#050505] text-white px-6 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="text-center mb-16 md:mb-24">
          {badge && (
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase">
              {badge}
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">{headingHighlight}</span>
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
           <Link
             href="/posts"
             className="relative flex h-[52px] items-center justify-center bg-brand/10 hover:bg-brand/20 text-brand text-sm font-bold px-10 rounded-[26px] border border-brand/40 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(91,78,255,0.3)] uppercase tracking-widest"
           >
             Ver todos os artigos
           </Link>
        </div>      </div>
    </section>
  )
}
