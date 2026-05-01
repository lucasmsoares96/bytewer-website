import type { CollectionConfig } from 'payload'

import { revalidateTeam, revalidateDeleteTeam } from './hooks/revalidateTeam'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'email'],
    group: 'Bytewer',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    },
    {
      name: 'linkedin',
      type: 'text',
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Ordem de exibição no site',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateTeam],
    afterDelete: [revalidateDeleteTeam],
  },
}
