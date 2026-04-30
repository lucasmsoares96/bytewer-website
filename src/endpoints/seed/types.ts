export type NicheVariant = {
  title: string
  seo: {
    title: string
    description: string
  }
  hero: {
    tagline: string
    title: string
    titleHighlight: string
    description: string
    ctaLabel: string
  }
  problem: {
    title: string
    titleHighlight: string
    items: string[]
    quote: string
  }
  solution: {
    title: string
    titleHighlight: string
    description: string
    cards: { title: string; description: string }[]
  }
  agents: {
    title: string
    subtitle: string
    agents: { title: string; description: string }[]
  }
  authority: {
    title: string
    titleHighlight: string
    subtitle: string
    stats: { label: string }[]
  }
  cta: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    disclaimer: string
    channelLabel: string
  }
}

export type NicheCopy = {
  slug: string
  pt: NicheVariant
  en: NicheVariant
  solutionCardIcons: string[]
  agentIcons: string[]
  statValues: string[]
}

export type ContactChannel = {
  type: 'whatsapp' | 'messenger' | 'instagram' | 'email'
  label: string
  href: string
}
