import type { GlobalConfig } from 'payload'

import { iconSelectOptions } from '@/components/Icon'
import { revalidateServices } from './hooks/revalidateServices'

export const Services: GlobalConfig = {
  slug: 'services',
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
      name: 'items',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'iconName',
          type: 'select',
          options: iconSelectOptions,
          defaultValue: 'Bot',
        },
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateServices],
  },
}
