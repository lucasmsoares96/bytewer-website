import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'statsBlock',
  interfaceName: 'StatsBlock',
  labels: { singular: 'Estatísticas', plural: 'Estatísticas' },
  admin: { group: 'Bytewer Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'stats' },
    { name: 'heading', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'suffix', type: 'text' },
        { name: 'label', type: 'text', localized: true },
        { name: 'source', type: 'text', localized: true },
      ],
    },
  ],
}
