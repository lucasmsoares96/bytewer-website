import React from 'react'

import { Icon, type IconName } from '@/components/Icon'
import type { SolutionBlock as SolutionBlockType } from '@/payload-types'

export const SolutionBlockComponent: React.FC<SolutionBlockType> = ({
  anchor,
  title,
  titleHighlight,
  description,
  cards,
}) => {
  return (
    <section
      id={anchor || 'solution'}
      className="bg-bytewer-bg text-white py-24 px-6 border-t border-white/5"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}{' '}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
                {titleHighlight}
              </span>
            )}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-400">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards?.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-bytewer-surface p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-4">
                <Icon name={c.iconName as IconName} size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionBlockComponent
