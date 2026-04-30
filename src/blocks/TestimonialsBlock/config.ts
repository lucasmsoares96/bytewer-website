import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonialsBlock',
  interfaceName: 'TestimonialsBlock',
  labels: { singular: 'Depoimentos', plural: 'Depoimentos' },
  admin: { group: 'Bytewer Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'testimonials' },
    { name: 'badge', type: 'text', localized: true },
    { name: 'heading', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'quote', type: 'textarea', localized: true },
        { name: 'author', type: 'text', required: true },
        { name: 'role', type: 'text', localized: true },
        { name: 'photo', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
