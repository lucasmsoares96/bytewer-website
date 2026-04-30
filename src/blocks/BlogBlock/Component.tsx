import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { BlogBlock as BlogBlockType, Post } from '@/payload-types'
import { BlogBlockClient } from './Component.client'

export const BlogBlockComponent: React.FC<BlogBlockType & { locale?: string }> = async ({
  anchor,
  badge,
  heading,
  headingHighlight,
  subtitle,
  limit,
  locale,
}) => {
  const payload = await getPayload({ config: configPromise })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: limit || 3,
    locale: (locale as any) || 'pt-BR',
    sort: '-publishedAt',
    where: {
        _status: {
            equals: 'published'
        }
    }
  })

  if (posts.length === 0) return null

  return (
    <BlogBlockClient 
      anchor={anchor}
      badge={badge}
      heading={heading}
      headingHighlight={headingHighlight}
      subtitle={subtitle}
      posts={posts as Post[]}
    />
  )
}

export default BlogBlockComponent
