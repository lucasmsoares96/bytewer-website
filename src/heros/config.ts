import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

const LEGACY_TYPES: readonly string[] = ['highImpact', 'mediumImpact', 'lowImpact']

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Bytewer', value: 'bytewer' },
        { label: 'High Impact', value: 'highImpact' },
        { label: 'Medium Impact', value: 'mediumImpact' },
        { label: 'Low Impact', value: 'lowImpact' },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: { condition: (_, { type } = {}) => type === 'bytewer' },
    },
    {
      name: 'titleHighlight',
      type: 'text',
      localized: true,
      admin: {
        description: 'Trecho destacado em gradiente, exibido após o título.',
        condition: (_, { type } = {}) => type === 'bytewer',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      admin: { condition: (_, { type } = {}) => type === 'bytewer' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { condition: (_, { type } = {}) => type === 'bytewer' },
    },
    {
      name: 'primaryCta',
      type: 'group',
      admin: { condition: (_, { type } = {}) => type === 'bytewer' },
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text', defaultValue: '#contact' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      admin: { condition: (_, { type } = {}) => type === 'bytewer' },
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text', defaultValue: '#portfolio' },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Imagem de fundo decorativa (opcional).',
        condition: (_, { type } = {}) => type === 'bytewer',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
      admin: {
        condition: (_, { type } = {}) => LEGACY_TYPES.includes(type),
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { type } = {}) => LEGACY_TYPES.includes(type),
        },
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
