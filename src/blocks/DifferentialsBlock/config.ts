import type { Block } from 'payload'

import { iconSelectOptions } from '@/components/Icon'

export const DifferentialsBlock: Block = {
  slug: 'differentialsBlock',
  interfaceName: 'DifferentialsBlock',
  labels: { singular: 'Diferenciais', plural: 'Diferenciais' },
  admin: { group: 'Bytewer Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'differentials' },
    { name: 'badge', type: 'text', localized: true },
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
          defaultValue: 'Zap',
        },
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
}
