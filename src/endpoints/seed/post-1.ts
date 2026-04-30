import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
  locale?: 'pt-BR' | 'en'
}

export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  locale = 'en',
}) => {
  const isEn = locale === 'en'
  const t = {
    title: isEn
      ? 'How to run a digital product discovery in 4 weeks'
      : 'Como estruturar um discovery de produto digital em 4 semanas',
    metaTitle: isEn
      ? 'How to run a 4-week digital product discovery sprint'
      : 'Como estruturar um discovery de produto digital em 4 semanas',
    intro: isEn
      ? 'A short playbook on the discovery process Bytewer applies on every new engagement — from problem framing to a buildable backlog, in just four weeks.'
      : 'Um playbook curto sobre o processo de discovery que a Bytewer aplica em todo novo projeto — do enquadramento do problema a um backlog pronto para construção, em apenas quatro semanas.',
    h1: isEn ? 'Why a time-boxed discovery still wins' : 'Por que um discovery com prazo definido ainda funciona',
    p1: isEn
      ? 'Most digital projects fail not because the team cannot build, but because the team builds the wrong thing. A focused discovery sprint forces the right conversations early: who is the user, what decision are we improving, what would make this measurably better, and what would make it fail. Four weeks is enough to interview real users, validate the riskiest assumptions, and converge on a scope the engineering team can commit to without surprises in week six.'
      : 'A maioria dos projetos digitais falha não porque o time não sabe construir, mas porque constrói a coisa errada. Um sprint de discovery focado força as conversas certas logo no início: quem é o usuário, qual decisão estamos melhorando, o que tornaria isso mensuravelmente melhor e o que faria fracassar. Quatro semanas bastam para entrevistar usuários reais, validar as hipóteses mais arriscadas e convergir em um escopo que o time de engenharia pode assumir sem surpresas na semana seis.',
    h2: isEn ? 'The four-week structure we use' : 'A estrutura de quatro semanas que usamos',
    p2: isEn
      ? 'Each week has a single job. Week one is framing: stakeholder interviews, success metrics, and a written problem statement everyone signs off on. Week two is field research: five to eight user interviews, a competitive sweep, and a synthesis of pain points. Week three is solutioning: low-fidelity flows, technical spikes on the riskiest integrations, and a rough cost model. Week four is convergence: clickable prototype, a sliced backlog with effort estimates, and a go/no-go recommendation backed by evidence.'
      : 'Cada semana tem um único objetivo. A semana um é de enquadramento: entrevistas com stakeholders, métricas de sucesso e uma declaração escrita do problema validada por todos. A semana dois é de pesquisa de campo: cinco a oito entrevistas com usuários, uma varredura competitiva e síntese das dores. A semana três é de solução: fluxos em baixa fidelidade, spikes técnicos nas integrações mais arriscadas e um modelo de custo aproximado. A semana quatro é de convergência: protótipo clicável, backlog fatiado com estimativas de esforço e uma recomendação go/no-go baseada em evidências.',
    listIntro: isEn ? 'Deliverables we hand over at the end of week four:' : 'Entregáveis ao final da semana quatro:',
    li1: isEn
      ? 'Problem statement and success metrics agreed by stakeholders.'
      : 'Declaração do problema e métricas de sucesso acordadas com stakeholders.',
    li2: isEn
      ? 'Synthesis of user research with verbatim quotes and prioritized pains.'
      : 'Síntese da pesquisa com usuários, citações literais e dores priorizadas.',
    li3: isEn
      ? 'Clickable prototype validated with at least three users.'
      : 'Protótipo clicável validado com pelo menos três usuários.',
    li4: isEn
      ? 'Sliced backlog with effort, risk, and an MVP recommendation.'
      : 'Backlog fatiado com esforço, risco e recomendação de MVP.',
    quote: isEn
      ? '“Discovery is not a deliverable, it is a decision. Four weeks is the smallest box that holds enough evidence to bet on.”'
      : '“Discovery não é entregável, é decisão. Quatro semanas é a menor caixa que cabe evidência suficiente para apostar.”',
    h3: isEn ? 'When four weeks is too long — and when it is too short' : 'Quando quatro semanas é demais — e quando é pouco',
    p3: isEn
      ? 'For a small internal tool with a known user base, two weeks is often enough. For regulated domains like healthcare or finance, where compliance discovery alone can take a month, expect six to eight. The principle stays the same: time-box it, write down the assumptions, and exit with a backlog the team can actually build. Discovery is the cheapest place to be wrong.'
      : 'Para uma ferramenta interna pequena com base de usuários conhecida, duas semanas geralmente bastam. Em domínios regulados como saúde ou finanças, em que só o discovery de compliance pode levar um mês, espere seis a oito. O princípio é o mesmo: dê um time-box, escreva as hipóteses e saia com um backlog que o time consiga de fato construir. Discovery é o lugar mais barato para errar.',
    metaDescription: isEn
      ? 'A four-week discovery playbook for digital products: framing, research, solutioning, and convergence into a buildable MVP backlog.'
      : 'Playbook de discovery em quatro semanas para produtos digitais: enquadramento, pesquisa, solução e convergência em um MVP pronto para construir.',
  }

  return {
    slug: isEn ? 'discovery-in-4-weeks' : 'discovery-em-4-semanas',
    _status: 'published',
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.intro, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'heading',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.h1, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.p1, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'heading',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.h2, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.p2, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.listIntro, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'list',
            children: [
              {
                type: 'listitem',
                children: [
                  { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.li1, version: 1 },
                ],
                direction: 'ltr', format: '', indent: 0, value: 1, version: 1,
              },
              {
                type: 'listitem',
                children: [
                  { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.li2, version: 1 },
                ],
                direction: 'ltr', format: '', indent: 0, value: 2, version: 1,
              },
              {
                type: 'listitem',
                children: [
                  { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.li3, version: 1 },
                ],
                direction: 'ltr', format: '', indent: 0, value: 3, version: 1,
              },
              {
                type: 'listitem',
                children: [
                  { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.li4, version: 1 },
                ],
                direction: 'ltr', format: '', indent: 0, value: 4, version: 1,
              },
            ],
            direction: 'ltr', format: '', indent: 0, listType: 'bullet', start: 1, tag: 'ul', version: 1,
          },
          {
            type: 'block',
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
            format: '', version: 2,
          },
          {
            type: 'quote',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.quote, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, version: 1,
          },
          {
            type: 'heading',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.h3, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.p3, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
        ],
        direction: 'ltr', format: '', indent: 0, version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: t.metaDescription,
      image: heroImage.id,
      title: t.metaTitle,
    },
    relatedPosts: [],
    title: t.title,
  }
}
