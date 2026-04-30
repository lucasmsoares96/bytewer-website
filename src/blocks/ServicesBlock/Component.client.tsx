'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { Icon, type IconName } from '@/components/Icon'
type Services = any;

interface ServicesBlockClientProps {
  anchor?: string | null
  data: Services
}

export const ServicesBlockClient: React.FC<ServicesBlockClientProps> = ({ 
  anchor, 
  data 
}) => {
  return (
    <section
      id={anchor || 'services'}
      className="py-24 md:py-32 bg-[#050505] px-6 relative overflow-hidden text-white"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[600px] opacity-10 pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 3014 1039" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#5B4EFF" />
            </pattern>
            <path d="M0 500 Q 750 100 1500 500 T 3000 500" stroke="url(#dotPattern)" strokeWidth="100" fill="none" opacity="0.5"/>
            <path d="M0 600 Q 750 200 1500 600 T 3000 600" stroke="url(#dotPattern)" strokeWidth="100" fill="none" opacity="0.3"/>
         </svg>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {data.heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">{data.headingHighlight}</span>
          </h2>
          {data.subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
               {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data as any).items?.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 hover:border-brand/30 hover:bg-[#0f0f0f] transition-[border-color,background-color] duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 blur-[40px] rounded-full group-hover:bg-brand/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand/30 transition-all duration-300">
                  <Icon name={item.iconName as IconName} className="w-7 h-7 text-brand group-hover:drop-shadow-[0_0_8px_rgba(91,78,255,0.5)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
