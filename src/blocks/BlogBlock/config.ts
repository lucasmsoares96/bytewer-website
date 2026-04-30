import type { Block } from 'payload'

export const BlogBlock: Block = {
  slug: 'blogBlock',
  interfaceName: 'BlogBlock',
  labels: {
    singular: 'Blog (Section)',
    plural: 'Blog (Sections)',
  },
  admin: {
    group: 'Bytewer Sections',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      defaultValue: 'blog',
    },
    {
      name: 'badge',
      type: 'text',
      defaultValue: 'BLOG',
      localized: true,
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Nossos Últimos',
      localized: true,
    },
    {
      name: 'headingHighlight',
      type: 'text',
      defaultValue: 'Artigos',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Fique por dentro das novidades do mundo da tecnologia e IA.',
      localized: true,
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
      admin: {
        description: 'Número de posts para exibir.',
      },
    },
  ],
}
