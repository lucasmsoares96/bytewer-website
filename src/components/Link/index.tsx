'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

import type { Page, Post } from '@/payload-types'

const SUPPORTED_LOCALES = ['en', 'pt-BR'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const getLocaleFromPathname = (pathname: string | null | undefined): SupportedLocale | null => {
  if (!pathname) return null
  const seg = pathname.split('/')[1]
  if (seg === 'en' || seg === 'pt-BR') return seg
  return null
}

const localizeHref = (href: string, locale: SupportedLocale | null): string => {
  if (!href) return href
  // External URLs
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) return href
  // mailto/tel handled by scheme test above; pure anchors
  if (href.startsWith('#')) return href
  // Only prefix when on a non-default locale (or any non-pt-BR? we prefix for any locale present)
  if (!locale) return href
  // Already locale-prefixed
  if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href
  for (const l of SUPPORTED_LOCALES) {
    if (href === `/${l}` || href.startsWith(`/${l}/`)) return href
  }
  // Root-anchor like /#contact -> /<locale>/#contact
  if (href.startsWith('/#')) return `/${locale}${href}`
  if (href.startsWith('/')) return `/${locale}${href}`
  return href
}

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  onClick?: React.MouseEventHandler
  hideIcon?: boolean
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
    hideIcon,
  } = props

  const pathname = usePathname()
  const currentLocale = getLocaleFromPathname(pathname)

  const rawHref =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!rawHref) return null

  const href = localizeHref(rawHref, currentLocale)

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) props.onClick(e)
    
    const finalHref = rawHref || url || ''
    if (finalHref.startsWith('/#') || finalHref.startsWith('#')) {
      const sectionId = finalHref.replace(/^\/?#/, '')
      const element = document.getElementById(sectionId)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const clickProps = { onClick: handleClick }

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link
        className={cn('inline-flex items-center text-foreground hover:text-brand transition-colors gap-1 font-medium border-b border-transparent hover:border-brand pb-0.5 !no-underline rounded-none h-auto px-0 py-0', className)}
        href={href || url || ''}
        {...newTabProps}
        {...clickProps}
      >
        <span className="flex items-center gap-1">
          {label && label}
          {children && children}
          {!hideIcon && <ArrowUpRight size={16} className="shrink-0" />}
        </span>
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance} {...clickProps}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        <span className="flex items-center gap-1">
          {label && label}
          {children && children}
          {appearance === 'link' && !hideIcon && <ArrowUpRight size={16} className="shrink-0" />}
        </span>
      </Link>
    </Button>
  )
}
