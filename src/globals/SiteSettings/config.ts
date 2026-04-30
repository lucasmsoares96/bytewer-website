import type { GlobalConfig } from 'payload'

import { revalidateSiteSettings } from './hooks/revalidateSiteSettings'

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Configurações',
  },
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'logoLight',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Versão clara do logo, para fundos escuros.' },
    },
    { name: 'tagline', type: 'text', localized: true },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Compartilhamento',
      fields: [
        { name: 'siteName', type: 'text', localized: true },
        { name: 'metaTitle', type: 'text', localized: true },
        { name: 'metaDescription', type: 'textarea', localized: true },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Imagem padrão para compartilhamento (1200x630).' },
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Favicon do site (.ico, .svg ou .png).' },
        },
        {
          name: 'twitterHandle',
          type: 'text',
          admin: { description: 'Ex.: @bytewer' },
        },
      ],
    },
    {
      name: 'socials',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'youtube', type: 'text' },
        { name: 'twitter', type: 'text' },
        { name: 'reddit', type: 'text' },
        { name: 'github', type: 'text' },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSiteSettings],
  },
}
