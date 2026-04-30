import type { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolioBlock',
  interfaceName: 'PortfolioBlock',
  labels: { singular: 'Portfólio', plural: 'Portfólio' },
  admin: { group: 'Bytewer Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'portfolio' },
    { name: 'badge', type: 'text', localized: true },
    { name: 'heading', type: 'text', localized: true },
    { name: 'headingHighlight', type: 'text', localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      admin: { description: 'Selecione projetos a exibir, na ordem desejada.' },
    },
    { name: 'viewAllLabel', type: 'text', localized: true },
    { name: 'viewAllHref', type: 'text', defaultValue: '#contact' },
  ],
}
