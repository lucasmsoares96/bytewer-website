import type { GlobalConfig } from 'payload'

import { iconSelectOptions } from '@/components/Icon'
import { revalidateToolbox } from './hooks/revalidateToolbox'

export const Toolbox: GlobalConfig = {
  slug: 'toolbox',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Conteúdo',
  },
  fields: [
    { name: 'badge', type: 'text', localized: true },
    { name: 'heading', type: 'text', localized: true },
    { name: 'headingHighlight', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'categories',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: 'category', type: 'text', localized: true },
        {
          name: 'iconName',
          type: 'select',
          options: iconSelectOptions,
          defaultValue: 'Code',
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'logo', type: 'upload', relationTo: 'media' },
            { name: 'externalLogoUrl', type: 'text', admin: { description: 'URL externa para o logo (ex: CDN)' } },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateToolbox],
  },
}
