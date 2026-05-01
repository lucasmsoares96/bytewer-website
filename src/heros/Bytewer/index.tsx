'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import type { Page, Media } from '@/payload-types'

import { HeroCardStack } from './HeroCardStack.client'

type Props = NonNullable<Page['hero']>

const PRIMARY_FALLBACK_HREF = '#contact'
const SECONDARY_FALLBACK_HREF = '#portfolio'

const HeroBackground = ({ src, alt }: { src: string; alt: string }) => (
  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      priority
      className="min-w-full min-h-full object-cover transform scale-[1.4] md:scale-[1.6] lg:scale-[1.8] xl:scale-[2.0] origin-center transition-transform duration-700"
    />
  </div>
)

export const BytewerHero: React.FC<Props> = ({
  title,
  titleHighlight,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
}) => {
  const bg = typeof backgroundImage === 'object' ? (backgroundImage as Media | null) : null

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bytewer-bg flex flex-col justify-center pt-20 pb-12 px-6 text-white">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {bg?.url && <HeroBackground src={bg.url} alt={bg.alt ?? ''} />}

      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col z-10">
            <motion.h1
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight drop-shadow-sm"
            >
              {title}{' '}
              {titleHighlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
                  {titleHighlight}
                </span>
              )}
            </motion.h1>

            {subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-gray-300 text-2xl md:text-3xl font-semibold"
              >
                {subtitle}
              </motion.h2>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-[600px]"
              >
                {description}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex gap-4 flex-col sm:flex-row"
            >
              {primaryCta?.label && (
                <a
                  href={primaryCta.href || PRIMARY_FALLBACK_HREF}
                  className="bg-brand/10 hover:bg-brand/20 text-brand font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-brand/40 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(91,78,255,0.3)] inline-flex items-center justify-center"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta?.label && (
                <a
                  href={secondaryCta.href || SECONDARY_FALLBACK_HREF}
                  className="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
                >
                  {secondaryCta.label}
                </a>
              )}
            </motion.div>
          </div>

          <div className="relative h-[350px] md:h-[450px] lg:h-[600px] w-full flex items-center justify-center">
            <HeroCardStack />
          </div>
        </div>
      </div>
    </section>
  )
}
