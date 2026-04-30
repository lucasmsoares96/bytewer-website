'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'
import type { Team, Media } from '@/payload-types'

interface TeamBlockClientProps {
  anchor?: string | null
  data: Team
}

const TeamCard: React.FC<{ 
  member: any
  isActive: boolean 
  onHover: () => void 
}> = ({ member, isActive, onHover }) => {
  const photo = typeof member.photo === 'object' ? (member.photo as Media | null) : null

  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      className={`relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-[#111] cursor-pointer transition-colors duration-500 ${
        isActive ? 'border-brand/50 shadow-[0_0_30px_rgba(91,78,255,0.15)]' : 'hover:border-white/20'
      }`}
      initial={false}
      animate={{
        flex: isActive ? 2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      style={{
        minWidth: isActive ? '240px' : '120px'
      }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a]">
        {photo?.url ? (
          <Image
            src={photo.url}
            alt={member.name ?? ''}
            fill
            sizes="(max-width: 768px) 50vw, 240px"
            className={`object-cover transition-all duration-700 ${
              isActive ? 'grayscale-0 scale-105 opacity-100' : 'grayscale scale-100 opacity-60'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-brand/10" />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${
          isActive ? 'opacity-90' : 'opacity-20 hover:opacity-10'
        }`} />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-3xl font-bold text-white whitespace-nowrap">{member.name}</h3>
              <p className="text-brand font-medium tracking-wide text-lg">{member.role}</p>
              
              <div className="overflow-hidden">
                {member.bio && (
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed border-t border-white/10 pt-4 max-w-md">
                    {member.bio}
                  </p>
                )}
                
                <div className="flex gap-3 mt-5 text-white">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2.5 bg-white/10 rounded-full hover:bg-brand transition-colors backdrop-blur-sm"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/10 rounded-full hover:bg-brand transition-colors backdrop-blur-sm"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/10 rounded-full hover:bg-brand transition-colors backdrop-blur-sm"
                      aria-label={`GitHub ${member.name}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="lg:hidden">
            {!isActive && (
                <div>
                   <h3 className="text-xl font-bold text-white truncate">{member.name}</h3>
                </div>
            )}
        </div>
      </div>
    </motion.div>
  )
}

export const TeamBlockClient: React.FC<TeamBlockClientProps> = ({ anchor, data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const members = (data as any).members || []

  return (
    <section 
      id={anchor || 'team'}
      className="bg-bytewer-bg text-white py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {(data as any).heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">{(data as any).headingHighlight}</span>
            </h2>
            {(data as any).subtitle && (
              <p className="text-gray-400 text-lg max-w-lg">
                {(data as any).subtitle}
              </p>
            )}
          </motion.div>
        </div>

        <div className="hidden lg:flex flex-row gap-4 h-[500px] items-stretch">
          {members.map((member: any, index: number) => (
            <TeamCard 
              key={index} 
              member={member} 
              isActive={index === activeIndex}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
           {members.map((member: any, index: number) => (
             <div key={index} className="h-[400px]">
                <TeamCard
                  member={member}
                  isActive={true}
                  onHover={() => {}}
                />
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
