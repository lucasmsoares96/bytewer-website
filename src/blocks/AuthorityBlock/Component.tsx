import React from 'react'

import type { AuthorityBlock as AuthorityBlockType } from '@/payload-types'

export const AuthorityBlockComponent: React.FC<AuthorityBlockType> = ({
  anchor,
  title,
  titleHighlight,
  subtitle,
  stats,
}) => {
  return (
    <section
      id={anchor || 'authority'}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats?.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-bytewer-surface p-6 text-center"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AuthorityBlockComponent
