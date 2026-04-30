import type { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'ctaBlock',
  interfaceName: 'CtaBlock',
  labels: { singular: 'Call to Action', plural: 'Calls to Action' },
  admin: { group: 'Bytewer Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'contact' },
    { name: 'badge', type: 'text', localized: true },
    { name: 'title', type: 'text', localized: true },
    { name: 'titleHighlight', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'buttonLabel', type: 'text', localized: true },
    { name: 'buttonHref', type: 'text', defaultValue: '#contact' },
    { name: 'disclaimer', type: 'text', localized: true },
    { name: 'channelLabel', type: 'text', localized: true },
    {
      name: 'channels',
      type: 'array',
      maxRows: 8,
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'Messenger', value: 'messenger' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'E-mail', value: 'email' },
          ],
          required: true,
        },
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
