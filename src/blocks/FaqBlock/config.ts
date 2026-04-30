import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FaqBlock: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  admin: { group: 'Bytewer Niche LP' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'faq' },
    { name: 'heading', type: 'text', required: true, localized: true },
    { name: 'subheading', type: 'textarea', localized: true },
    {
      name: 'items',
      type: 'array',
      label: 'Perguntas',
      required: true,
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true, localized: true },
        {
          name: 'answer',
          type: 'richText',
          required: true,
          localized: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
              FixedToolbarFeature(),
            ],
          }),
        },
      ],
    },
  ],
}

export default FaqBlock
