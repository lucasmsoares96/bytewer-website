'use client'
import React from 'react'
import { motion } from 'framer-motion'

import type { TypedLocale } from 'payload'
import type { StatsBlock as StatsBlockType } from '@/payload-types'

type Props = Omit<StatsBlockType, 'locale'> & { locale?: TypedLocale }

export const StatsBlockComponent: React.FC<Props> = ({
  anchor,
  items,
  locale,
}) => {
  const isEn = String(locale) === 'en'
  return (
    <section 
      id={anchor || 'stats'}
      className="py-20 bg-[#050505] px-6 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(91,78,255,0.08),_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {items?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 group"
            >
              <div className={`${stat.value === '∞' ? 'text-7xl md:text-[8rem]' : 'text-5xl md:text-7xl'} font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter group-hover:scale-105 transition-transform duration-500`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-brand font-bold mb-2 tracking-[0.2em] uppercase text-xs">
                 {isEn ? 'Impact' : 'Impacto'}
              </div>
              <div className="text-gray-400 font-medium max-w-[250px] leading-relaxed">
                {stat.label}
              </div>
              {stat.source && (
                <div className="text-[10px] text-gray-600 mt-4 px-3 py-1 rounded-full border border-white/5 bg-white/2 uppercase tracking-widest font-bold">
                   {stat.source}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBlockComponent
