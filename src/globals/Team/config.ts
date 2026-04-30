import type { GlobalConfig } from 'payload'

import { revalidateTeam } from './hooks/revalidateTeam'

export const Team: GlobalConfig = {
  slug: 'team',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Conteúdo',
  },
  fields: [
    { name: 'heading', type: 'text', localized: true },
    { name: 'headingHighlight', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'members',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', localized: true },
        { name: 'bio', type: 'textarea', localized: true },
        { name: 'photo', type: 'upload', relationTo: 'media' },
        { name: 'email', type: 'email' },
        { name: 'github', type: 'text' },
        { name: 'linkedin', type: 'text' },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateTeam],
  },
}
