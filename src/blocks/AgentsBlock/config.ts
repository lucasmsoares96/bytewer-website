import type { Block } from 'payload'

import { iconSelectOptions } from '@/components/Icon'

export const AgentsBlock: Block = {
  slug: 'agentsBlock',
  interfaceName: 'AgentsBlock',
  labels: { singular: 'Agentes (LP)', plural: 'Agentes (LP)' },
  admin: { group: 'Bytewer Niche LP' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'agents' },
    { name: 'title', type: 'text', localized: true },
    { name: 'titleHighlight', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'agents',
      type: 'array',
      minRows: 1,
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
}
