import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'teamBlock',
  interfaceName: 'TeamBlock',
  labels: { singular: 'Time (Section)', plural: 'Time (Sections)' },
  admin: { group: 'Bytewer Sections' },
  fields: [{ name: 'anchor', type: 'text', defaultValue: 'team' }],
}
