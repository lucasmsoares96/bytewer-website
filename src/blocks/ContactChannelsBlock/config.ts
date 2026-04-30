import type { Block } from 'payload'

export const ContactChannelsBlock: Block = {
  slug: 'contactChannelsBlock',
  interfaceName: 'ContactChannelsBlock',
  labels: { singular: 'Canais de Contato', plural: 'Canais de Contato' },
  admin: { group: 'Bytewer Niche LP' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'contact-channels' },
    { name: 'title', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
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
