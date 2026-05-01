import type { NextConfig } from 'next'

export const redirects: NextConfig['redirects'] = async () => {
  const canonicalRootRedirects = [
    {
      source: '/',
      has: [{ type: 'host' as const, value: 'bytewer.com' }],
      destination: 'https://www.bytewer.com/pt-BR',
      permanent: true,
    },
    {
      source: '/',
      has: [{ type: 'host' as const, value: 'www.bytewer.com' }],
      destination: '/pt-BR',
      permanent: true,
    },
  ]

  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header' as const,
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  return [...canonicalRootRedirects, internetExplorerRedirect]
}
