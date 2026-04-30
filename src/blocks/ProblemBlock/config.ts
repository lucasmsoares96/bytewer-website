import type { Block } from 'payload'

export const ProblemBlock: Block = {
  slug: 'problemBlock',
  interfaceName: 'ProblemBlock',
  labels: { singular: 'Problema (LP)', plural: 'Problemas (LP)' },
  admin: { group: 'Bytewer Niche LP' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'problem' },
    { name: 'title', type: 'text', localized: true },
    { name: 'titleHighlight', type: 'text', localized: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'item', type: 'text', localized: true }],
    },
    { name: 'quote', type: 'textarea', localized: true },
  ],
}
