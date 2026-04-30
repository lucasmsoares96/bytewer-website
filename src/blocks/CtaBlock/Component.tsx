'use client'
import { Mail } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

import type { CtaBlock as CtaBlockType } from '@/payload-types'

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MessengerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const channelIcon = (type: string) => {
  switch (type) {
    case 'whatsapp':
      return <WhatsAppIcon className="w-6 h-6" />
    case 'messenger':
      return <MessengerIcon className="w-6 h-6" />
    case 'instagram':
      return <InstagramIcon className="w-6 h-6" />
    case 'email':
      return <Mail className="w-6 h-6" />
    default:
      return null
  }
}

export const CtaBlockComponent: React.FC<CtaBlockType> = ({
  anchor,
  badge,
  title,
  titleHighlight,
  description,
  disclaimer,
  channelLabel,
  channels,
}) => {
  return (
    <section
      id={anchor || 'contact'}
      className="py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#000] relative overflow-hidden px-6 text-white border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-brand rounded-full animate-pulse delay-700" />

      <div className="container mx-auto max-w-[1000px] relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              {badge}
            </div>
          )}

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            {title} <br />
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
                {titleHighlight}
              </span>
            )}
          </h2>

          {description && (
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}

          <div className="max-w-lg mx-auto mb-8">
            {channelLabel && (
              <label className="block text-sm font-medium text-gray-300 mb-4 uppercase tracking-widest">
                {channelLabel}
              </label>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {channels?.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-4 px-4 rounded-lg transition-all duration-300 border-2 flex flex-col items-center gap-2 bg-brand/10 hover:bg-brand/20 border-brand/40 hover:border-brand text-brand hover:shadow-[0_0_20px_rgba(91,78,255,0.3)]"
                >
                  {channelIcon(c.type)}
                  <span className="text-[10px] font-bold uppercase tracking-wider">{c.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {disclaimer && (
            <p className="text-sm text-gray-500 mt-6 font-medium italic">
              {disclaimer}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBlockComponent
