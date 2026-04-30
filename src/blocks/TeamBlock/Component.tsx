import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { TeamBlock as TeamBlockType } from '@/payload-types'
import type { TypedLocale } from 'payload'
import { TeamBlockClient } from './Component.client'

type Props = TeamBlockType & { locale?: TypedLocale }

export const TeamBlockComponent: React.FC<Props> = async ({ anchor, locale }) => {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: members } = await payload.find({
    collection: 'team',
    sort: 'order',
    locale: locale ?? 'pt-BR',
  })

  if (members.length === 0) return null

  const isEn = (locale as string) === 'en'
  const data = {
    heading: isEn ? 'The' : 'A',
    headingHighlight: isEn ? 'Team' : 'Equipe',
    subtitle: isEn ? 'Minds behind every line of code.' : 'Mentes por trás de cada linha de código.',
    members: members.map(m => ({
        name: m.name,
        role: m.role,
        bio: m.bio,
        photo: m.photo,
        email: m.email,
        github: m.github,
        linkedin: m.linkedin
    }))
  }

  return <TeamBlockClient anchor={anchor} data={data as any} />
}

export default TeamBlockComponent
