import type { Payload } from 'payload'
import { privacyContent, termsContent } from './content-pt'
import { privacyContentEn, termsContentEn } from './content-en'

export async function seedLegal({
  payload,
  ogBannerMedia,
}: {
  payload: Payload
  ogBannerMedia: { id: number }
}) {
  const legal = [
    {
      slug: 'politica-de-privacidade',
      titlePt: 'Política de Privacidade',
      titleEn: 'Privacy Policy',
      contentPt: privacyContent,
      contentEn: privacyContentEn,
      metaPt: {
        title: 'Política de Privacidade e Proteção de Dados — Bytewer',
        description:
          'Como a Bytewer coleta, usa, armazena e protege os dados pessoais dos seus clientes e visitantes do site, em conformidade com a LGPD.',
      },
      metaEn: {
        title: 'Privacy Policy and Personal Data Protection — Bytewer',
        description:
          'How Bytewer collects, uses, stores and protects personal data from clients and site visitors, in compliance with applicable data laws.',
      },
    },
    {
      slug: 'termo-de-uso',
      titlePt: 'Termos e Condições',
      titleEn: 'Terms and Conditions',
      contentPt: termsContent,
      contentEn: termsContentEn,
      metaPt: {
        title: 'Termos e Condições de Uso do Site e Serviços — Bytewer',
        description:
          'Termos e condições de uso do site e dos serviços de tecnologia, software e consultoria prestados pela Bytewer aos seus clientes.',
      },
      metaEn: {
        title: 'Terms and Conditions of Use for Site and Services — Bytewer',
        description:
          'Terms and conditions for using the Bytewer website and the technology, software and consulting services provided to clients.',
      },
    },
  ]

  for (const lg of legal) {
    const created = await payload.create({
      collection: 'pages',
      locale: 'pt-BR',
      context: { disableRevalidate: true },
      data: {
        title: lg.titlePt,
        slug: lg.slug,
        _status: 'published',
        hero: { type: 'none' },
        meta: {
          title: lg.metaPt.title,
          description: lg.metaPt.description,
          image: ogBannerMedia.id,
        },
        layout: [
          {
            blockType: 'content',
            columns: [
              {
                size: 'full',
                richText: lg.contentPt as any,
              },
            ],
          },
        ] as any,
      },
    })
    const createdLayout = created.layout as any[]
    const createdContent = createdLayout[0]
    const createdColumn = createdContent?.columns?.[0]
    await payload.update({
      collection: 'pages',
      id: created.id,
      locale: 'en',
      context: { disableRevalidate: true },
      data: {
        title: lg.titleEn,
        meta: {
          title: lg.metaEn.title,
          description: lg.metaEn.description,
        },
        layout: [
          {
            blockType: 'content',
            id: createdContent?.id,
            columns: [
              {
                id: createdColumn?.id,
                size: 'full',
                richText: lg.contentEn as any,
              },
            ],
          },
        ] as any,
      },
    })
  }
}
