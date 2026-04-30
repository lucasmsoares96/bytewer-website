import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-[#0A0A0A] rounded-[2rem] border border-white/10 p-8 md:p-16 flex flex-col gap-8 md:flex-row md:justify-between md:items-center shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-[48rem] flex items-center relative z-10 text-white">
          {richText && <RichText className="mb-0 prose-invert" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8 relative z-10">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
