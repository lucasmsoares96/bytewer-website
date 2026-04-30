import React from 'react'

import { Icon, type IconName } from '@/components/Icon'
import type { AgentsBlock as AgentsBlockType } from '@/payload-types'

export const AgentsBlockComponent: React.FC<AgentsBlockType> = ({
  anchor,
  title,
  titleHighlight,
  subtitle,
  agents,
}) => {
  return (
    <section
      id={anchor || 'agents'}
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
          {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents?.map((a, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-bytewer-surface p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-4">
                <Icon name={a.iconName as IconName} size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgentsBlockComponent
