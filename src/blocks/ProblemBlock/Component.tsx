import { CheckCircle2 } from 'lucide-react'
import React from 'react'

import type { ProblemBlock as ProblemBlockType } from '@/payload-types'

export const ProblemBlockComponent: React.FC<ProblemBlockType> = ({
  anchor,
  title,
  titleHighlight,
  items,
  quote,
}) => {
  return (
    <section
      id={anchor || 'problem'}
      className="bg-bytewer-bg text-white py-24 px-6 border-t border-white/5"
    >
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}{' '}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
              {titleHighlight}
            </span>
          )}
        </h2>
        {items && items.length > 0 && (
          <ul className="mt-8 space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-brand mt-1 shrink-0" size={20} />
                <span className="text-gray-300">{it.item}</span>
              </li>
            ))}
          </ul>
        )}
        {quote && (
          <blockquote className="mt-10 border-l-4 border-brand pl-4 italic text-gray-200">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
      </div>
    </section>
  )
}

export default ProblemBlockComponent
