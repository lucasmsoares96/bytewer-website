import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['pt-BR', 'en'] as const
const DEFAULT_LOCALE = 'pt-BR'

function pickLocale(req: NextRequest): string {
  const accept = req.headers.get('accept-language') ?? ''
  const candidates = accept.split(',').map((p) => p.split(';')[0].trim().toLowerCase())
  for (const c of candidates) {
    if (c.startsWith('pt')) return 'pt-BR'
    if (c.startsWith('en')) return 'en'
  }
  return DEFAULT_LOCALE
}

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const hasLocale = SUPPORTED_LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )
  if (hasLocale) return NextResponse.next()

  const locale = pickLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  url.search = search
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Skip api, admin, _next, system seed/preview, sitemaps, robots, favicons, files with extensions
    '/((?!api|admin|_next|next/seed|next/preview|next/exit-preview|pages-sitemap.xml|posts-sitemap.xml|robots.txt|favicon|.*\\.).*)',
  ],
}
