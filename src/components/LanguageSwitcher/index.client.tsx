'use client'

import { Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

export const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname() ?? '/'

  const current = pathname.startsWith('/en') ? 'en' : 'pt-BR'
  const target = current === 'en' ? 'pt-BR' : 'en'
  const label = current === 'en' ? 'EN' : 'PT'

  const swap = (next: string) => {
    const parts = pathname.split('/')
    if (parts[1] === 'pt-BR' || parts[1] === 'en') {
      parts[1] = next
      return parts.join('/') || `/${next}`
    }
    return `/${next}${pathname}`
  }

  // Plain <a> forces a hard navigation on locale switch; a soft client-side
  // transition re-renders the shared [locale] layout and re-encounters the
  // <InitTheme /> inline <script>, which React 19 refuses to run mid-tree.
  return (
    <a
      href={swap(target)}
      title="Change language / Mudar idioma"
      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium py-2 px-4 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
    >
      <Globe size={16} />
      <span>{label}</span>
    </a>
  )
}
