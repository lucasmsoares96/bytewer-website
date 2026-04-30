import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('border py-4 px-6 flex items-center rounded-2xl shadow-xl', {
          'border-white/10 bg-[#0A0A0A] text-white/90': style === 'info',
          'border-red-500/30 bg-red-500/10 text-red-200': style === 'error',
          'border-green-500/30 bg-green-500/10 text-green-200': style === 'success',
          'border-yellow-500/30 bg-yellow-500/10 text-yellow-200': style === 'warning',
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
