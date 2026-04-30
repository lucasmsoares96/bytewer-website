import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post2: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  locale = 'en',
}) => {
  const isEn = locale === 'en'
  const t = {
    title: isEn
      ? 'Generative AI in operations: 3 patterns that became default in 2026'
      : 'IA generativa em operações: 3 padrões que viraram default em 2026',
    metaTitle: isEn
      ? '3 generative AI patterns that became default in 2026'
      : '3 padrões de IA generativa que viraram default em 2026',
    intro: isEn
      ? 'After two years of pilots, three generative AI patterns have crossed from experiment to default in operational software: document extraction, augmented support, and on-demand reporting.'
      : 'Depois de dois anos de pilotos, três padrões de IA generativa cruzaram da experimentação para o default em software operacional: extração de documentos, atendimento aumentado e relatórios sob demanda.',
    h1: isEn ? 'Pattern 1 — Document extraction with LLMs' : 'Padrão 1 — Extração de documentos com LLMs',
    p1: isEn
      ? 'Contracts, invoices, medical reports, freight bills — every operation runs on documents that someone has to read. The pattern is now well-understood: OCR for the pixels, an LLM with structured output for the meaning, and a human review step where confidence is low. We applied exactly this in Locx, our contract automation product, where lawyers used to spend hours pulling clauses out of PDFs by hand. The LLM does the first pass, returns a typed JSON, and the human only resolves the cases the model flagged. Cycle time dropped from days to minutes, and accuracy is higher than the manual baseline because the model never gets tired on page forty.'
      : 'Contratos, notas fiscais, laudos médicos, conhecimentos de frete — toda operação roda sobre documentos que alguém precisa ler. O padrão hoje é bem entendido: OCR para os pixels, um LLM com saída estruturada para o significado e uma etapa de revisão humana quando a confiança é baixa. Aplicamos exatamente isso no Locx, nosso produto de automação de contratos, em que advogados gastavam horas extraindo cláusulas de PDFs à mão. O LLM faz a primeira passada, devolve um JSON tipado e o humano só resolve os casos sinalizados pelo modelo. O tempo de ciclo caiu de dias para minutos, e a precisão é maior que a linha de base manual porque o modelo nunca cansa na página quarenta.',
    h2: isEn ? 'Pattern 2 — Augmented support, not replaced support' : 'Padrão 2 — Atendimento aumentado, não substituído',
    p2: isEn
      ? 'The early dream was a chatbot that handled tickets end to end. The pattern that actually shipped is different: the agent stays in the loop, but every message they read or write is summarized, classified, and pre-drafted by an LLM grounded on the company knowledge base. Average handle time falls 30 to 50 percent, customer satisfaction goes up because answers are consistent, and the agent role shifts from typing to verifying. The trick is grounding — the model must cite the source paragraph it used, or the support team will not trust it past week two.'
      : 'O sonho inicial era um chatbot que resolvia o ticket de ponta a ponta. O padrão que de fato foi para produção é outro: o agente continua no loop, mas toda mensagem que ele lê ou escreve é resumida, classificada e pré-redigida por um LLM ancorado na base de conhecimento da empresa. O tempo médio de atendimento cai de 30 a 50 por cento, a satisfação sobe porque as respostas ficam consistentes e o papel do agente passa de digitar para verificar. O truque é o grounding — o modelo precisa citar o trecho fonte que usou, senão o time de atendimento perde a confiança na segunda semana.',
    listIntro: isEn ? 'What separates the projects that ship from the ones that stall:' : 'O que separa os projetos que vão pra produção dos que travam:',
    li1: isEn ? 'Structured outputs (JSON schema) instead of free text.' : 'Saídas estruturadas (JSON schema) em vez de texto livre.',
    li2: isEn ? 'Evaluation set built before the first prompt is written.' : 'Conjunto de avaliação construído antes do primeiro prompt.',
    li3: isEn ? 'Confidence thresholds wired to a human review queue.' : 'Limiares de confiança ligados a uma fila de revisão humana.',
    li4: isEn ? 'Source citations the user can click and verify.' : 'Citações de fonte que o usuário pode clicar e verificar.',
    h3: isEn ? 'Pattern 3 — Reports on demand' : 'Padrão 3 — Relatórios sob demanda',
    p3: isEn
      ? 'The third pattern is the least flashy and the most loved by operators: ask a question in natural language, get a chart and a written summary back, with the SQL the model ran exposed for auditing. The cost is low, the value is immediate, and it removes the bottleneck of waiting on a data analyst for a one-off question. The discipline is in the schema — the model is only as good as the semantic layer it queries, so we invest in dbt models, column descriptions, and a curated set of tested example questions before exposing this to non-technical users.'
      : 'O terceiro padrão é o menos chamativo e o mais amado por quem opera: pergunte em linguagem natural, receba um gráfico e um resumo escrito, com o SQL que o modelo rodou exposto para auditoria. O custo é baixo, o valor é imediato e elimina o gargalo de esperar um analista de dados para uma pergunta pontual. A disciplina está no schema — o modelo é tão bom quanto a camada semântica que ele consulta, então investimos em modelos dbt, descrições de colunas e um conjunto curado de perguntas de exemplo testadas antes de liberar isso para usuários não técnicos.',
    quote: isEn
      ? '“The companies winning with generative AI in 2026 are not the ones with the fanciest demos. They are the ones who shipped the boring patterns first.”'
      : '“As empresas que estão ganhando com IA generativa em 2026 não são as do demo mais bonito. São as que colocaram os padrões chatos em produção primeiro.”',
    metaDescription: isEn
      ? 'Three generative AI patterns that became default in operational software in 2026: document extraction, augmented support, and on-demand reporting.'
      : 'Três padrões de IA generativa em software operacional em 2026: extração de documentos, atendimento aumentado e relatórios sob demanda.',
  }

  return {
    slug: isEn ? 'generative-ai-operations-patterns-2026' : 'ia-generativa-operacoes-padroes-2026',
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
            type: 'block',
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
            format: '', version: 2,
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
          {
            type: 'quote',
            children: [
              { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: t.quote, version: 1 },
            ],
            direction: 'ltr', format: '', indent: 0, version: 1,
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
