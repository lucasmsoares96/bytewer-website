import clsx from 'clsx'
import React from 'react'
import { BytewerLogo } from './BytewerLogo'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  variant?: 'white' | 'dark'
}

export const Logo = ({ className, variant = 'white' }: Props) => {
  return (
    <BytewerLogo
      className={clsx(
        'select-none transition-transform duration-300 hover:scale-105',
        variant === 'white' ? 'text-white' : 'text-bytewer-bg',
        className,
      )}
    />
  )
}
