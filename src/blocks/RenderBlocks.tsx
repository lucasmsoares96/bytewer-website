import React, { Fragment } from 'react'
import type { TypedLocale } from 'payload'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ServicesBlockComponent } from '@/blocks/ServicesBlock/Component'
import { DifferentialsBlockComponent } from '@/blocks/DifferentialsBlock/Component'
import { ToolboxBlockComponent } from '@/blocks/ToolboxBlock/Component'
import { PortfolioBlockComponent } from '@/blocks/PortfolioBlock/Component'
import { StatsBlockComponent } from '@/blocks/StatsBlock/Component'
import { TestimonialsBlockComponent } from '@/blocks/TestimonialsBlock/Component'
import { TeamBlockComponent } from '@/blocks/TeamBlock/Component'
import { BlogBlockComponent } from '@/blocks/BlogBlock/Component'
import { CtaBlockComponent } from '@/blocks/CtaBlock/Component'
import { ProblemBlockComponent } from '@/blocks/ProblemBlock/Component'
import { SolutionBlockComponent } from '@/blocks/SolutionBlock/Component'
import { AgentsBlockComponent } from '@/blocks/AgentsBlock/Component'
import { AuthorityBlockComponent } from '@/blocks/AuthorityBlock/Component'
import { ContactChannelsBlockComponent } from '@/blocks/ContactChannelsBlock/Component'
import { FaqBlockComponent } from '@/blocks/FaqBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  servicesBlock: ServicesBlockComponent,
  differentialsBlock: DifferentialsBlockComponent,
  toolboxBlock: ToolboxBlockComponent,
  portfolioBlock: PortfolioBlockComponent,
  statsBlock: StatsBlockComponent,
  testimonialsBlock: TestimonialsBlockComponent,
  teamBlock: TeamBlockComponent,
  blogBlock: BlogBlockComponent,
  ctaBlock: CtaBlockComponent,
  problemBlock: ProblemBlockComponent,
  solutionBlock: SolutionBlockComponent,
  agentsBlock: AgentsBlockComponent,
  authorityBlock: AuthorityBlockComponent,
  contactChannelsBlock: ContactChannelsBlockComponent,
  faq: FaqBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  locale?: TypedLocale
}> = (props) => {
  const { blocks, locale } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              // Bytewer section blocks already have their own padding/spacing.
              // Wrap legacy blocks (cta/content/mediaBlock/etc.) in vertical
              // margin so they don't collapse against neighbours.
              const bytewerSlugs = new Set([
                'servicesBlock',
                'differentialsBlock',
                'toolboxBlock',
                'portfolioBlock',
                'statsBlock',
                'testimonialsBlock',
                'teamBlock',
                'blogBlock',
                'ctaBlock',
                'problemBlock',
                'solutionBlock',
                'agentsBlock',
                'authorityBlock',
                'contactChannelsBlock',
                'faq',
              ])
              const wrapClass = bytewerSlugs.has(blockType) ? '' : 'my-16'
              return (
                <div className={wrapClass} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer locale={locale} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
