import configPromise from '@payload-config'
import { getPayload, type TypedLocale } from 'payload'
import { Instagram, Linkedin } from 'lucide-react'
import { FaReddit, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer({ locale }: { locale?: TypedLocale } = {}) {
  const payload = await getPayload({ config: configPromise })
  const effectiveLocale = locale ?? 'pt-BR'
  const footerData = await payload.findGlobal({
    slug: 'footer',
    depth: 1,
    locale: effectiveLocale,
  })
  const settings = await payload
    .findGlobal({ slug: 'siteSettings', depth: 1, locale: effectiveLocale })
    .catch(() => null)

  const columns = footerData?.columns || []
  const socials = settings?.socials

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-white/5 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-6 group transition-transform duration-300 hover:scale-105 origin-left">
              <Logo variant="white" className="w-32 md:w-36 h-auto" />
            </Link>
            {settings?.tagline && <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">{settings.tagline}</p>}
            {socials && (
              <div className="flex gap-4 flex-wrap">
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-full hover:bg-brand transition-all hover:scale-110 text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {socials.instagram && (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-full hover:bg-brand transition-all hover:scale-110 text-white"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {socials.youtube && (
                  <a
                    href={socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-full hover:bg-brand transition-all hover:scale-110 text-white"
                  >
                    <FaYoutube size={20} />
                  </a>
                )}
                {socials.twitter && (
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-full hover:bg-brand transition-all hover:scale-110 text-white"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {socials.reddit && (
                  <a
                    href={socials.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-full hover:bg-brand transition-all hover:scale-110 text-white"
                  >
                    <FaReddit size={20} />
                  </a>
                )}
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-full hover:bg-brand transition-all hover:scale-110 text-white"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            )}
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-lg mb-8 text-white/90">{col.label}</h4>
              <ul className="space-y-4">
                {col.navItems?.map(({ link }, j) => (
                  <li key={j}>
                    <CMSLink
                      {...link}
                      hideIcon={true}
                      className="text-gray-400 hover:text-brand transition-colors text-sm md:text-base"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-gray-500 text-xs md:text-sm tracking-wide">
          {footerData?.copyright || `© ${new Date().getFullYear()} Bytewer. Todos os direitos reservados.`}
        </div>
      </div>
    </footer>
  )
}
