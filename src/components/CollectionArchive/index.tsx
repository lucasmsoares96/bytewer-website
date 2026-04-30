import React from 'react'

import { PostCard, type PostCardData } from '@/components/PostCard'
import type { CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return <PostCard key={index} post={result as PostCardData} />
          }
          return null
        })}
      </div>
    </div>
  )
}
