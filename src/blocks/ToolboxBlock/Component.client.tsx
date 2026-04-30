'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Icon, type IconName } from '@/components/Icon'
import type { Toolbox, Media } from '@/payload-types'

interface ToolboxBlockClientProps {
  anchor?: string | null
  data: Toolbox
}

const VectorBackground = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
     <Image
        src="/seed/Vector_2.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
     />
     <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
     <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
  </div>
);

export const ToolboxBlockClient: React.FC<ToolboxBlockClientProps> = ({ 
  anchor, 
  data 
}) => {
  return (
    <section 
      id={anchor || 'tech-stack'}
      className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden text-white"
    >
      <VectorBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
            {data.badge || 'TOOLBOX'}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {data.heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-300">{data.headingHighlight}</span>
          </h2>
          {data.subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.categories?.map((cat, index) => {
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-[#0F0F0F]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-brand/30 transition-colors duration-500" />
                
                <div className="relative p-8 flex flex-col h-full z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(91,78,255,0.4)]">
                      <Icon name={cat.iconName as IconName} fallback="Cpu" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{cat.category}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto">
                    {cat.items?.map((tech, j) => {
                      const logo = typeof tech.logo === 'object' ? (tech.logo as Media | null) : null
                      const logoUrl = tech.externalLogoUrl || logo?.url

                      return (
                        <div 
                          key={j} 
                          className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item"
                        >
                           <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                             {logoUrl ? (
                               <img
                                  src={logoUrl}
                                  alt={tech.name ?? ''}
                                  className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300 opacity-70 group-hover/item:opacity-100"
                               />
                             ) : (
                               <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/20 font-bold text-[10px] text-center p-1 uppercase">
                                  {tech.name}
                               </div>
                             )}
                           </div>
                           <span className="text-[10px] md:text-xs font-mono text-gray-500 group-hover/item:text-gray-300 transition-colors uppercase tracking-wider">{tech.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
              )
          })}
        </div>
      </div>
    </section>
  )
}
