'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/utilities/ui'

import type { TypedLocale } from 'payload'
import type { Media, PortfolioBlock as PortfolioBlockType, Project } from '@/payload-types'

type Props = Omit<PortfolioBlockType, 'locale'> & { locale?: TypedLocale }

export const PortfolioBlockComponent: React.FC<Props> = ({
  anchor,
  badge,
  heading,
  headingHighlight,
  subtitle,
  projects,
  viewAllLabel,
  viewAllHref,
  locale,
}) => {
  const isEn = String(locale) === 'en'
  const projectDocs =
    (projects?.filter((p) => typeof p === 'object') as Project[] | undefined) ?? []

  return (
    <section
      id={anchor || 'portfolio'}
      className="bg-[#050505] text-white py-24 md:py-32 px-6 overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            {badge && (
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="text-sm font-medium text-brand uppercase tracking-wider">
                  {badge}
                </span>
              </motion.div>
            )}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {heading}{' '}
              {headingHighlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
                  {headingHighlight}
                </span>
              )}
            </h2>
            {subtitle && <p className="text-white/60 text-lg leading-relaxed max-w-xl">{subtitle}</p>}
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {projectDocs.map((proj, index) => {
            const image = typeof proj.image === 'object' ? (proj.image as Media | null) : null
            const reverse = index % 2 === 1
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Mockup */}
                <div className="w-full lg:w-3/5 group relative">
                  <div className="relative rounded-[2rem] bg-[#0A0A0A] border border-white/10 shadow-2xl transition-all duration-700 group-hover:transform group-hover:scale-[1.02] group-hover:border-brand/30 overflow-hidden">
                    {/* Browser Header */}
                    <div className="h-12 bg-[#0F0F0F] border-b border-white/5 flex items-center px-6 gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]/20 group-hover:bg-[#FF5F56] transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/20 group-hover:bg-[#FFBD2E] transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]/20 group-hover:bg-[#27C93F] transition-colors" />
                      </div>
                      <div className="ml-4 flex-1 h-7 bg-[#1A1A1A] rounded-lg flex items-center px-4 text-[10px] text-white/20 font-mono overflow-hidden">
                        <span className="truncate">bytewer.com/projetos/{proj.slug}</span>
                      </div>
                    </div>

                    <div className="relative aspect-[16/9] bg-[#0A0A0A] overflow-hidden">
                      {image?.url && (
                        <Image
                          src={image.url}
                          alt={image.alt ?? proj.title ?? ''}
                          fill
                          sizes="(max-width: 1024px) 100vw, 80vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -inset-10 bg-brand/10 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                        <ArrowUpRight className="w-5 h-5 text-brand" />
                      </div>
                      <span className="text-brand font-mono text-sm uppercase tracking-[0.2em] font-bold">
                        Case Study
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">{proj.title}</h3>
                    <p className="text-white/50 text-lg leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 gap-4 py-8 border-y border-white/5">
                    {proj.features?.slice(0, 4).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full transition-transform group-hover/item:scale-150 shadow-[0_0_8px_rgba(91,78,255,0.8)]" />
                        <span className="text-white/80 text-base font-medium">{f.feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/projetos/${proj.slug}`}
                    className="inline-flex items-center text-white hover:text-brand transition-colors gap-2 font-medium border-b border-transparent hover:border-brand pb-0.5"
                  >
                    {isEn ? 'Read case study' : 'Ler estudo de caso'} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {viewAllLabel && (
          <div className="mt-16 flex justify-center">
            <Link
              href={viewAllHref || '/portfolio'}
              className="relative flex h-[52px] items-center justify-center bg-brand/10 hover:bg-brand/20 text-brand text-sm font-bold px-10 rounded-[26px] border border-brand/40 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(91,78,255,0.3)] uppercase tracking-widest"
            >
              {viewAllLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioBlockComponent
