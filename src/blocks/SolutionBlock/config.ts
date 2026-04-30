import type { Block } from 'payload'

import { iconSelectOptions } from '@/components/Icon'

export const SolutionBlock: Block = {
  slug: 'solutionBlock',
  interfaceName: 'SolutionBlock',
  labels: { singular: 'Solução (LP)', plural: 'Soluções (LP)' },
  admin: { group: 'Bytewer Niche LP' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'solution' },
    { name: 'title', type: 'text', localized: true },
    { name: 'titleHighlight', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'iconName',
          type: 'select',
          options: iconSelectOptions,
          defaultValue: 'Lightbulb',
        },
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
}
