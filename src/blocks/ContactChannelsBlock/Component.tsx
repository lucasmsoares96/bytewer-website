import { Instagram, Mail, MessageCircle, Send } from 'lucide-react'
import React from 'react'

import type { ContactChannelsBlock as ContactChannelsBlockType } from '@/payload-types'

const channelIcon = (type: string) => {
  switch (type) {
    case 'whatsapp':
      return <MessageCircle size={18} />
    case 'messenger':
      return <Send size={18} />
    case 'instagram':
      return <Instagram size={18} />
    case 'email':
      return <Mail size={18} />
    default:
      return null
  }
}

export const ContactChannelsBlockComponent: React.FC<ContactChannelsBlockType> = ({
  anchor,
  title,
  description,
  channels,
}) => {
  return (
    <section
      id={anchor || 'contact-channels'}
      className="bg-bytewer-bg text-white py-24 px-6 border-t border-white/5"
    >
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-gray-400">{description}</p>
        )}
        {channels && channels.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {channels.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bytewer-surface px-4 py-2 text-sm hover:border-brand/40 hover:text-brand transition-colors"
              >
                {channelIcon(c.type)}
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactChannelsBlockComponent
