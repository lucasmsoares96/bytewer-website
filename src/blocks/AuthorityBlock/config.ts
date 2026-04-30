import type { Block } from 'payload'

export const AuthorityBlock: Block = {
  slug: 'authorityBlock',
  interfaceName: 'AuthorityBlock',
  labels: { singular: 'Autoridade (LP)', plural: 'Autoridades (LP)' },
  admin: { group: 'Bytewer Niche LP' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'authority' },
    { name: 'title', type: 'text', localized: true },
    { name: 'titleHighlight', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', localized: true },
      ],
    },
  ],
}
