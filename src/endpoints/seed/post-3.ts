import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post3: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  locale = 'en',
}) => {
  const isEn = locale === 'en'
  const t = {
    title: isEn
      ? 'Why custom software still pays off in a SaaS-first era'
      : 'Por que software sob medida ainda compensa em uma era de SaaS',
    metaTitle: isEn
      ? 'Why custom software still pays off in a SaaS-first era'
      : 'Por que software sob medida ainda compensa na era do SaaS',
    intro: isEn
      ? 'SaaS solves the average case. The competitive edge of a regulated industry sits in the cases SaaS does not solve — and that is where custom software still wins.'
      : 'O SaaS resolve o caso médio. A vantagem competitiva de uma indústria regulada está nos casos que o SaaS não resolve — e é aí que software sob medida ainda ganha.',
    h1: isEn ? 'The SaaS default — and where it ends' : 'O default do SaaS — e onde ele termina',
    p1: isEn
      ? 'Most operational problems should be solved with SaaS. Email, payroll, CRM, time tracking for a fifteen-person agency — there is a tool, it is good enough, and building your own is a waste of capital. The discussion gets interesting at the edge: the part of your operation that is uniquely yours, that regulators inspect, that competitors cannot copy because they do not see it. SaaS, by definition, is built for the average customer. If your differentiator is the average, you do not have a differentiator.'
      : 'A maioria dos problemas operacionais deveria ser resolvida com SaaS. E-mail, folha de pagamento, CRM, ponto eletrônico para uma agência de quinze pessoas — existe ferramenta, ela é boa o suficiente e construir a sua é desperdício de capital. A discussão fica interessante na borda: a parte da sua operação que é exclusivamente sua, que o regulador inspeciona, que o concorrente não copia porque não enxerga. O SaaS, por definição, é feito para o cliente médio. Se seu diferencial é a média, você não tem diferencial.',
    h2: isEn ? 'Where custom platforms still win' : 'Onde plataformas próprias ainda ganham',
    p2: isEn
      ? 'Three signals tell us a custom platform is the right call: regulation that demands evidence the SaaS vendor cannot provide on your behalf, a workflow that is itself the product (so the workflow becomes a moat), and integration depth — when the value is in joining five upstream systems no SaaS vendor will ever wire together for you. We saw all three in Tito, our health and safety platform: Brazilian labor law requires audit trails the foreign HSE SaaS could not produce, every customer site has a slightly different inspection routine, and the data has to flow back into the customer ERP. Buying off the shelf would have meant either non-compliance or a permanent army of consultants stitching things together.'
      : 'Três sinais indicam que uma plataforma própria é o caminho certo: regulação que exige evidência que o fornecedor de SaaS não consegue produzir por você, um workflow que é o próprio produto (então o workflow vira moat) e profundidade de integração — quando o valor está em conectar cinco sistemas a montante que nenhum SaaS vai integrar por você. Vimos os três no Tito, nossa plataforma de SST: a CLT exige trilhas de auditoria que o SaaS internacional não produzia, cada obra do cliente tem um roteiro de inspeção um pouco diferente e os dados precisam voltar para o ERP do cliente. Comprar pronto significaria descumprimento ou um exército permanente de consultores costurando as coisas.',
    listIntro: isEn ? 'When to build custom (and when not to):' : 'Quando construir sob medida (e quando não):',
    li1: isEn
      ? 'Build when the workflow is your competitive moat — not just internal preference.'
      : 'Construa quando o workflow é seu moat competitivo — não só preferência interna.',
    li2: isEn
      ? 'Build when regulation requires evidence a vendor cannot provide for you.'
      : 'Construa quando a regulação exige evidência que o fornecedor não fornece por você.',
    li3: isEn
      ? 'Buy when the problem is generic and a mature SaaS already exists.'
      : 'Compre quando o problema é genérico e já existe SaaS maduro.',
    li4: isEn
      ? 'Buy when total cost of ownership over five years is lower than building.'
      : 'Compre quando o custo total de propriedade em cinco anos é menor que construir.',
    quote: isEn
      ? '“SaaS is rented leverage. Custom software is owned leverage. Both have a place — the mistake is renting where you should own.”'
      : '“SaaS é alavancagem alugada. Software próprio é alavancagem possuída. Ambos têm lugar — o erro é alugar onde você deveria ser dono.”',
    h3: isEn ? 'The hybrid that actually wins' : 'O híbrido que de fato ganha',
    p3: isEn
      ? 'The right answer is rarely all-custom or all-SaaS. The companies winning in regulated industries run a hybrid: SaaS for the commodity layer, a custom platform for the differentiator, and well-designed APIs between them. The custom side stays small on purpose — every feature you own is a feature you have to maintain. Done well, the custom layer is a thin moat of code that sits on top of a thick layer of bought leverage. That is the architecture we keep arriving at across our case studies, and it is the one we recommend to teams who ask whether they should build or buy.'
      : 'A resposta certa raramente é tudo sob medida ou tudo SaaS. Quem está ganhando em indústrias reguladas roda um híbrido: SaaS na camada commodity, plataforma própria no diferencial e APIs bem projetadas entre os dois. O lado custom é deliberadamente pequeno — toda feature que você tem é uma feature que você precisa manter. Bem feito, o custom é um moat fino de código apoiado sobre uma camada grossa de alavancagem comprada. É a arquitetura que repetidamente chegamos nos nossos cases e é a que recomendamos para times que perguntam se devem construir ou comprar.',
    metaDescription: isEn
      ? 'When does custom software still beat SaaS? A field guide for regulated industries on building moats with proprietary platforms.'
      : 'Quando software sob medida ainda supera o SaaS? Um guia de campo para indústrias reguladas sobre construir moats com plataformas próprias.',
  }

  return {
    slug: isEn ? 'custom-software-vs-saas-regulated' : 'software-sob-medida-vs-saas-regulado',
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
            type: 'block',
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
            format: '', version: 2,
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
