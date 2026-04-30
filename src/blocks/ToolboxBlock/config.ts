import type { Block } from 'payload'

export const ToolboxBlock: Block = {
  slug: 'toolboxBlock',
  interfaceName: 'ToolboxBlock',
  labels: { singular: 'Toolbox (Section)', plural: 'Toolbox (Sections)' },
  admin: { group: 'Bytewer Sections' },
  fields: [{ name: 'anchor', type: 'text', defaultValue: 'technology' }],
}
