import type { ContactChannel, NicheCopy, NicheVariant } from '../../types'
import { contactChannelLabelsEn } from './data'

export function buildNicheLayout({
  n,
  v,
  channels,
}: {
  n: NicheCopy
  v: NicheVariant
  channels: ContactChannel[]
}) {
  return [
    {
      blockType: 'problemBlock',
      anchor: 'problem',
      title: v.problem.title,
      titleHighlight: v.problem.titleHighlight,
      items: v.problem.items.map((item) => ({ item })),
      quote: v.problem.quote,
    },
    {
      blockType: 'solutionBlock',
      anchor: 'solution',
      title: v.solution.title,
      titleHighlight: v.solution.titleHighlight,
      description: v.solution.description,
      cards: v.solution.cards.map((c, i) => ({ ...c, iconName: n.solutionCardIcons[i] })),
    },
    {
      blockType: 'agentsBlock',
      anchor: 'agents',
      title: v.agents.title,
      subtitle: v.agents.subtitle,
      agents: v.agents.agents.map((a, i) => ({ ...a, iconName: n.agentIcons[i] })),
    },
    {
      blockType: 'authorityBlock',
      anchor: 'authority',
      title: v.authority.title,
      titleHighlight: v.authority.titleHighlight,
      subtitle: v.authority.subtitle,
      stats: v.authority.stats.map((s, i) => ({ ...s, value: n.statValues[i] })),
    },
    {
      blockType: 'ctaBlock',
      anchor: 'contact',
      badge: v.cta.badge,
      title: v.cta.title,
      titleHighlight: v.cta.titleHighlight,
      description: v.cta.description,
      disclaimer: v.cta.disclaimer,
      channelLabel: v.cta.channelLabel,
      channels,
    },
  ]
}

// Walks the just-created layout (with auto-generated IDs) and rebuilds it
// for the EN locale, preserving block + array element IDs so Payload
// updates the same items rather than recreating them.
export function localizeNicheLayout({
  createdLayout,
  n,
  en,
}: {
  createdLayout: any[]
  n: NicheCopy
  en: NicheVariant
}) {
  const ctaIndex = createdLayout.findIndex((b: any) => b?.blockType === 'ctaBlock')
  const enChannelsWithIds = (createdLayout[ctaIndex]?.channels ?? []).map(
    (ch: any, i: number) => ({
      ...ch,
      label: contactChannelLabelsEn[i],
    }),
  )
  const enLayoutBare = buildNicheLayout({
    n,
    v: en,
    channels: enChannelsWithIds as ContactChannel[],
  })
  return enLayoutBare.map((block: any, bi: number) => {
    const created = createdLayout[bi] as any
    const out: any = { ...block, id: created.id }
    if (block.items && created.items) out.items = block.items.map((it: any, i: number) => ({ ...it, id: created.items[i]?.id }))
    if (block.cards && created.cards) out.cards = block.cards.map((it: any, i: number) => ({ ...it, id: created.cards[i]?.id }))
    if (block.agents && created.agents) out.agents = block.agents.map((it: any, i: number) => ({ ...it, id: created.agents[i]?.id }))
    if (block.stats && created.stats) out.stats = block.stats.map((it: any, i: number) => ({ ...it, id: created.stats[i]?.id }))
    if (block.channels && created.channels) out.channels = block.channels.map((it: any, i: number) => ({ ...it, id: created.channels[i]?.id }))
    return out
  })
}
