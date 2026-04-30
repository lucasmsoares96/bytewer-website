export type LexNode = Record<string, unknown>

export const txt = (text: string, format = 0): LexNode => ({
  type: 'text',
  text,
  version: 1,
  detail: 0,
  format,
  mode: 'normal',
  style: '',
})

export const para = (text: string): LexNode => ({
  type: 'paragraph',
  version: 1,
  format: '',
  indent: 0,
  direction: 'ltr',
  children: [txt(text)],
})

export const heading = (text: string, tag: 'h2' | 'h3' = 'h2'): LexNode => ({
  type: 'heading',
  tag,
  version: 1,
  format: '',
  indent: 0,
  direction: 'ltr',
  children: [txt(text)],
})

export const list = (items: string[]): LexNode => ({
  type: 'list',
  listType: 'bullet',
  tag: 'ul',
  start: 1,
  version: 1,
  format: '',
  indent: 0,
  direction: 'ltr',
  children: items.map((it, i) => ({
    type: 'listitem',
    value: i + 1,
    version: 1,
    format: '',
    indent: 0,
    direction: 'ltr',
    children: [txt(it)],
  })),
})

export const richText = (children: LexNode[]) => ({
  root: {
    type: 'root',
    version: 1,
    format: '',
    indent: 0,
    direction: 'ltr',
    children,
  },
})

export const faqAnswer = (text: string): LexNode => {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  const textNodes = parts.filter(Boolean).map((part) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return txt(part.slice(2, -2), 1)
    }
    return txt(part)
  })

  return {
    root: {
      type: 'root',
      version: 1,
      format: '',
      indent: 0,
      direction: 'ltr',
      children: [
        {
          type: 'paragraph',
          version: 1,
          format: '',
          indent: 0,
          direction: 'ltr',
          children: textNodes,
        },
      ],
    },
  }
}

export const truncate = (s: string, max = 155) =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…'
