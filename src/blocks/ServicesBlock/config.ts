import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  labels: { singular: 'Serviços (Section)', plural: 'Serviços (Sections)' },
  admin: {
    group: 'Bytewer Sections',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      defaultValue: 'services',
      admin: { description: 'ID âncora para navegação interna.' },
    },
  ],
}
