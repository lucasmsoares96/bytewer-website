import type { Payload } from 'payload'

export async function seedNav({ payload }: { payload: Payload }) {
  const navItemsPt = [
    { link: { type: 'custom' as const, label: 'Home', url: '/' } },
    { link: { type: 'custom' as const, label: 'Projetos', url: '/#portfolio' } },
    { link: { type: 'custom' as const, label: 'FAQ', url: '/#faq' } },
    { link: { type: 'custom' as const, label: 'Blog', url: '/#blog' } },
    { link: { type: 'custom' as const, label: 'Sobre', url: '/#team' } },
  ]

  await payload.updateGlobal({
    slug: 'header',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: { navItems: navItemsPt },
  })

  // Header.navItems is `localized: true` — Payload stores a separate array
  // per locale, so do NOT reuse pt-BR IDs (would violate uniqueness).
  const navItemsEn = [
    { link: { type: 'custom' as const, label: 'Home', url: '/' } },
    { link: { type: 'custom' as const, label: 'Projects', url: '/#portfolio' } },
    { link: { type: 'custom' as const, label: 'FAQ', url: '/#faq' } },
    { link: { type: 'custom' as const, label: 'Blog', url: '/#blog' } },
    { link: { type: 'custom' as const, label: 'About', url: '/#team' } },
  ]
  await payload.updateGlobal({
    slug: 'header',
    locale: 'en',
    context: { disableRevalidate: true },
    data: { navItems: navItemsEn },
  })

  const footerPt = {
    columns: [
      {
        label: 'Navegação',
        navItems: [
          { link: { type: 'custom' as const, label: 'Home', url: '/' } },
          { link: { type: 'custom' as const, label: 'Projetos', url: '/#portfolio' } },
          { link: { type: 'custom' as const, label: 'Blog', url: '/#blog' } },
          { link: { type: 'custom' as const, label: 'Sobre', url: '/#team' } },
        ],
      },
      {
        label: 'Empresa',
        navItems: [
          { link: { type: 'custom' as const, label: 'Sobre nós', url: '/#team' } },
          { link: { type: 'custom' as const, label: 'FAQ', url: '/#faq' } },
          { link: { type: 'custom' as const, label: 'Blog', url: '/#blog' } },
          { link: { type: 'custom' as const, label: 'Carreiras', url: '/#contact' } },
          { link: { type: 'custom' as const, label: 'Parceiros', url: '/#contact' } },
        ],
      },
      {
        label: 'Campanhas',
        navItems: [
          { link: { type: 'custom' as const, label: 'Clínicas', url: '/clinicas' } },
          { link: { type: 'custom' as const, label: 'Jurídico', url: '/juridico' } },
          { link: { type: 'custom' as const, label: 'Proteção Veicular', url: '/protecao-veicular' } },
          { link: { type: 'custom' as const, label: 'Automação com IA', url: '/automacao' } },
        ],
      },
      {
        label: 'Legal',
        navItems: [
          { link: { type: 'custom' as const, label: 'Política de Privacidade', url: '/politica-de-privacidade' } },
          { link: { type: 'custom' as const, label: 'Termos e Condições', url: '/termo-de-uso' } },
        ],
      },
    ],
    copyright: `Todos os direitos reservados.`,
  }

  await payload.updateGlobal({
    slug: 'footer',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: footerPt,
  })

  const footerEn = {
    columns: [
      {
        label: 'Navigation',
        navItems: [
          { link: { type: 'custom' as const, label: 'Home', url: '/' } },
          { link: { type: 'custom' as const, label: 'Projects', url: '/#portfolio' } },
          { link: { type: 'custom' as const, label: 'Blog', url: '/#blog' } },
          { link: { type: 'custom' as const, label: 'About', url: '/#team' } },
        ],
      },
      {
        label: 'Company',
        navItems: [
          { link: { type: 'custom' as const, label: 'About us', url: '/#team' } },
          { link: { type: 'custom' as const, label: 'FAQ', url: '/#faq' } },
          { link: { type: 'custom' as const, label: 'Blog', url: '/#blog' } },
          { link: { type: 'custom' as const, label: 'Careers', url: '/#contact' } },
          { link: { type: 'custom' as const, label: 'Partners', url: '/#contact' } },
        ],
      },
      {
        label: 'Campaigns',
        navItems: [
          { link: { type: 'custom' as const, label: 'Clinics', url: '/clinicas' } },
          { link: { type: 'custom' as const, label: 'Legal', url: '/juridico' } },
          { link: { type: 'custom' as const, label: 'Vehicle Protection', url: '/protecao-veicular' } },
          { link: { type: 'custom' as const, label: 'AI Automation', url: '/automacao' } },
        ],
      },
      {
        label: 'Legal',
        navItems: [
          { link: { type: 'custom' as const, label: 'Privacy Policy', url: '/politica-de-privacidade' } },
          { link: { type: 'custom' as const, label: 'Terms and Conditions', url: '/termo-de-uso' } },
        ],
      },
    ],
    copyright: 'All rights reserved.',
  }

  await payload.updateGlobal({
    slug: 'footer',
    locale: 'en',
    context: { disableRevalidate: true },
    data: footerEn,
  })
}
