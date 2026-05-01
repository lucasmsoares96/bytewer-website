import { NextRequest } from 'next/server'

const ALLOWED_HOSTS = new Set([
  'cdn.jsdelivr.net',
  'upload.wikimedia.org',
  'www.vectorlogo.zone',
])

export async function GET(req: NextRequest) {
  const value = req.nextUrl.searchParams.get('url')
  if (!value) return new Response('Missing url', { status: 400 })

  let url: URL
  try {
    url = new URL(value)
  } catch {
    return new Response('Invalid url', { status: 400 })
  }

  if (url.protocol !== 'https:' || !ALLOWED_HOSTS.has(url.hostname)) {
    return new Response('Unsupported logo host', { status: 400 })
  }

  const upstream = await fetch(url, {
    next: { revalidate: 60 * 60 * 24 * 30 },
  })

  if (!upstream.ok) {
    return new Response('Logo unavailable', { status: upstream.status })
  }

  return new Response(await upstream.arrayBuffer(), {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': upstream.headers.get('content-type') ?? 'image/svg+xml',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
