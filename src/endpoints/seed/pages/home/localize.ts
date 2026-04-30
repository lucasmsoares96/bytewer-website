import { homeFaqEn } from './faq'
import { homeEn } from './translations-en'

// Walks the just-created home layout (with Payload-assigned IDs) and rebuilds
// it for the EN locale, preserving block + array element IDs so Payload
// updates the same items rather than recreating them.
export function localizeHomeLayout(createdLayout: any[]) {
  return createdLayout.map((block: any) => {
    switch (block.blockType) {
      case 'differentialsBlock':
        return {
          ...block,
          badge: homeEn.differentials.badge,
          heading: homeEn.differentials.heading,
          headingHighlight: homeEn.differentials.headingHighlight,
          subtitle: homeEn.differentials.subtitle,
          items: (block.items ?? []).map((it: any, i: number) => ({
            ...it,
            title: homeEn.differentials.items[i]?.title,
            description: homeEn.differentials.items[i]?.description,
          })),
        }
      case 'portfolioBlock':
        return {
          ...block,
          badge: homeEn.portfolio.badge,
          heading: homeEn.portfolio.heading,
          headingHighlight: homeEn.portfolio.headingHighlight,
          subtitle: homeEn.portfolio.subtitle,
          viewAllLabel: homeEn.portfolio.viewAllLabel,
        }
      case 'statsBlock':
        return {
          ...block,
          items: (block.items ?? []).map((it: any, i: number) => ({
            ...it,
            label: homeEn.stats.items[i]?.label,
          })),
        }
      case 'testimonialsBlock':
        return {
          ...block,
          badge: homeEn.testimonials.badge,
          heading: homeEn.testimonials.heading,
          subtitle: homeEn.testimonials.subtitle,
          items: (block.items ?? []).map((it: any, i: number) => ({
            ...it,
            quote: homeEn.testimonials.items[i]?.quote,
            role: homeEn.testimonials.items[i]?.role,
          })),
        }
      case 'faq':
        return {
          ...block,
          heading: homeFaqEn.heading,
          subheading: homeFaqEn.subheading,
          items: (block.items ?? []).map((it: any, i: number) => ({
            ...it,
            question: homeFaqEn.items[i]?.question,
            answer: homeFaqEn.items[i]?.answer,
          })),
        }
      case 'blogBlock':
        return {
          ...block,
          badge: homeEn.blog.badge,
          heading: homeEn.blog.heading,
          headingHighlight: homeEn.blog.headingHighlight,
          subtitle: homeEn.blog.subtitle,
        }
      case 'ctaBlock':
        return {
          ...block,
          badge: homeEn.cta.badge,
          title: homeEn.cta.title,
          titleHighlight: homeEn.cta.titleHighlight,
          description: homeEn.cta.description,
          disclaimer: homeEn.cta.disclaimer,
          channelLabel: homeEn.cta.channelLabel,
          channels: (block.channels ?? []).map((ch: any, i: number) => ({
            ...ch,
            label: homeEn.cta.channelLabels[i],
          })),
        }
      default:
        // anchor-only blocks (servicesBlock, toolboxBlock, teamBlock) — pass through.
        return block
    }
  })
}
