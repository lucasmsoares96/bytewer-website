import type { MetadataRoute } from 'next'

import { getServerSideURL } from '@/utilities/getURL'

const AI_BOTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google AI training (separate from Googlebot)
  'Google-Extended',
  // Apple AI training
  'Applebot-Extended',
  // Others
  'cohere-ai',
  'Bytespider',
  'meta-externalagent',
  'FacebookBot',
]

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getServerSideURL()

  const isProduction =
    process.env.NEXT_PUBLIC_DISABLE_INDEXING !== 'true' &&
    (process.env.VERCEL_ENV === undefined || process.env.VERCEL_ENV === 'production')

  if (!isProduction) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      host: siteUrl,
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/next/*'],
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/admin/', '/api/'],
      })),
    ],
    sitemap: [
      `${siteUrl}/pages-sitemap.xml`,
      `${siteUrl}/posts-sitemap.xml`,
      `${siteUrl}/projects-sitemap.xml`,
    ],
    host: siteUrl,
  }
}
