import React from 'react'

import RichText from '@/components/RichText'
import { JsonLd } from '@/components/JsonLd'

type LexicalNode = {
  type?: string
  text?: string
  children?: LexicalNode[]
  [key: string]: unknown
}

type LexicalRoot = {
  root?: LexicalNode
}

const lexicalToPlainText = (node: LexicalNode | undefined): string => {
  if (!node) return ''
  let out = ''
  if (typeof node.text === 'string') out += node.text
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      out += lexicalToPlainText(child)
    }
    if (node.type === 'paragraph' || node.type === 'heading') out += '\n'
  }
  return out
}

type FaqItem = {
  question?: string | null
  answer?: LexicalRoot | null
}

type FaqBlockProps = {
  anchor?: string | null
  heading?: string | null
  subheading?: string | null
  items?: FaqItem[] | null
}

export const FaqBlockComponent: React.FC<FaqBlockProps> = ({
  anchor,
  heading,
  subheading,
  items,
}) => {
  const allItems = items ?? []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((it) => ({
      '@type': 'Question',
      name: it.question ?? '',
      acceptedAnswer: {
        '@type': 'Answer',
        text: lexicalToPlainText(it.answer?.root).trim(),
      },
    })),
  }

  return (
    <section
      id={anchor || 'faq'}
      className="bg-bytewer-bg text-white py-24 md:py-32 px-6 relative overflow-hidden border-t border-white/5"
    >
      {/* Decorative background blurs for atmosphere */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] opacity-50 pointer-events-none -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] opacity-50 pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {heading && (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        <ul className="flex flex-col gap-4">
          {allItems.map((it, i) => (
            <li key={i}>
              <details className="group rounded-2xl border border-white/5 bg-bytewer-surface hover:border-brand/30 hover:bg-white/[0.02] transition-[border-color,background-color] duration-300 relative overflow-hidden open:border-brand/40 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none font-semibold text-lg md:text-xl outline-none group-hover:text-brand transition-colors p-6 md:p-8">
                  <span className="leading-snug">{it.question}</span>
                  <span
                    aria-hidden
                    className="text-brand/80 group-open:text-brand transition-all duration-300 group-open:rotate-45 flex-shrink-0 bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-brand/20 group-open:bg-brand/20 text-xl font-light"
                  >
                    +
                  </span>
                </summary>
                <div className="mx-6 md:mx-8 pb-6 md:pb-8 pt-4 md:pt-6 border-t border-white/5 text-gray-400 text-base md:text-lg leading-relaxed group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2 duration-300">
                  {it.answer && (
                    <RichText
                      data={it.answer as never}
                      enableGutter={false}
                      enableProse
                      className="prose-invert max-w-none prose-p:leading-relaxed prose-a:text-brand prose-a:no-underline hover:prose-a:underline"
                    />
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
      {allItems.length > 0 && <JsonLd data={jsonLd} />}
    </section>
  )
}

export default FaqBlockComponent
