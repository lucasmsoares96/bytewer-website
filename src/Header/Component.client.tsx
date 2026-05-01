'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utilities/ui'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher/index.client'
import { CMSLink } from '@/components/Link'

interface HeaderClientProps {
  data: Header
  locale?: string
  adminBar?: React.ReactNode
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, locale, adminBar }) => {
  const contactLabel = locale === 'en' ? 'Contact us' : 'Fale conosco'
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setHeaderTheme(null)
    setTimeout(() => {
      setIsMobileMenuOpen(false)
    }, 0)
  }, [pathname, setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) {
      setTimeout(() => {
        setTheme(headerTheme)
      }, 0)
    }
  }, [headerTheme, theme])

  const handleNavigationClick = (url: string) => (e: React.MouseEvent) => {
    if (url.startsWith('/#') || url.startsWith('#')) {
      const sectionId = url.replace(/^\/?#/, '')
      const element = document.getElementById(sectionId)
      if (element) {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const localePrefix = locale ? `/${locale}` : ''
  const contactHref = `${localePrefix}/#contact`

  const navItems = data?.navItems || []

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[100] flex flex-col"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      {adminBar}
      <div
        className={`transition-all duration-300 border-b w-full ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-white/10 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between relative">
        <Link href="/" className="z-50 block group" aria-label="Bytewer — página inicial">
          <Logo variant="white" className="w-36 md:w-40 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ link }, i) => (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              hideIcon={true}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={link.url ? handleNavigationClick(link.url) : undefined}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href={contactHref}
            onClick={handleNavigationClick('/#contact')}
            className="relative flex h-[42px] items-center justify-center bg-brand/10 hover:bg-brand/20 text-brand text-xs font-bold px-6 rounded-full border border-brand/40 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(91,78,255,0.3)] uppercase tracking-widest overflow-hidden"
          >
            <div
              className={cn(
                "-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-solid !border-transparent [mask-clip:padding-box,border-box]",
                "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] z-20"
              )}
            >
              <motion.div
                className={cn(
                  "absolute aspect-square bg-gradient-to-r from-transparent via-brand to-brand"
                )}
                animate={{
                  offsetDistance: ["0%", "100%"],
                }}
                style={{
                  width: 20,
                  offsetPath: `rect(0 auto auto 0 round 21px)`,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
              />
            </div>
            <span className="relative z-30">{contactLabel}</span>
          </Link>
        </div>

        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-[#0A0A0A] border-b border-white/10 p-6 pt-24 md:hidden shadow-2xl"
            >
              <nav className="flex flex-col gap-6">
                {navItems.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    appearance="link"
                    hideIcon={true}
                    className="flex w-full justify-start text-lg font-medium text-gray-300 hover:text-white hover:no-underline cursor-pointer"
                    onClick={link.url ? handleNavigationClick(link.url) : undefined}
                  />
                ))}
                <hr className="border-white/10" />
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Link
                  href={contactHref}
                  onClick={handleNavigationClick('/#contact')}
                  className="block w-full text-center bg-brand/10 hover:bg-brand/20 text-brand py-3 rounded-xl font-semibold border border-brand/40 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(91,78,255,0.3)]"
                >
                  {contactLabel}
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </header>
  )
}
