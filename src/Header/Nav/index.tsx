'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
      {navItems.map(({ link }, i) => (
        <CMSLink
          key={i}
          {...link}
          appearance="link"
          className="text-gray-300 hover:text-white transition-colors"
        />
      ))}
    </nav>
  )
}
