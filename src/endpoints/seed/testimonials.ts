import type { Payload } from 'payload'

export async function seedTestimonials({ payload }: { payload: Payload }) {
  const testimonials = [
    {
      pt: { quote: 'Obrigado, Bytewer, por entregar mais que tecnologia — visão, agilidade e confiança. Parceria certa muda o jogo!', role: 'COO, Tito' },
      en: { quote: 'Thank you, Bytewer, for delivering more than technology — vision, agility and trust. The right partnership changes the game!', role: 'COO, Tito' },
      author: 'Alisson',
      order: 1,
    },
    {
      pt: { quote: 'É um prazer recomendar a Bytewer como parceiro estratégico no desenvolvimento de soluções tecnológicas avançadas. Recentemente, contratamos a Bytewer para criar uma aplicação baseada em IA, com o objetivo de automatizar a leitura de contratos de locação, extrair dados relevantes e preencher colunas de uma planilha, gerando uma base de dados precisa e eficiente. O projeto foi um verdadeiro sucesso desde o início. A aplicação foi implementada rapidamente, com a Bytewer demonstrando grande agilidade e competência técnica. A assertividade da IA passou de 85% para mais 97% graças às melhorias contínuas nos prompts, o que garantiu maior precisão e eficiência na extração de dados. Recomendamos a Bytewer com total confiança para qualquer empresa que busque inovação, qualidade e resultados consistentes em projetos de tecnologia avançada.', role: 'PO, Locx' },
      en: { quote: "It's a pleasure to recommend Bytewer as a strategic partner for advanced technology solutions. We hired Bytewer to build an AI-based application to automate the reading of rental contracts, extract relevant data and populate spreadsheet columns, generating a precise and efficient database. The project was a true success from the start. The application was implemented quickly, with Bytewer demonstrating great agility and technical competence. AI accuracy went from 85% to over 97% thanks to continuous improvements in the prompts. We recommend Bytewer with full confidence to any company looking for innovation, quality and consistent results in advanced technology projects.", role: 'PO, Locx' },
      author: 'Israel',
      order: 2,
    },
    {
      pt: { quote: 'Recomendo a Bytewer com muita alegria e satisfação! Entregam o que prometem, cumprem cronograma, são diretos e objetivos, sem contar que abraçam o projeto e dão a visão que nós leigos não temos em riqueza de detalhes! Acertamos muito na escolha dessa empresa como desenvolvedora do nosso projeto! Com certeza seremos parceiros por muito tempo!', role: 'Sócia/Gestora, Faccia' },
      en: { quote: 'I recommend Bytewer with great joy and satisfaction! They deliver what they promise, meet timelines, are direct and objective, and embrace the project, giving us laypeople a vision rich in detail! We made the right choice with this company as our project developer! We will surely be partners for a long time!', role: 'Partner/Manager, Faccia' },
      author: 'Bruna Fernandes',
      order: 3,
    },
    {
      pt: { quote: 'A Bytewer foi uma parceira importante em uma demanda estratégica da nossa empresa, apoiando o processo de leitura automatizada de documentos e tabulação das principais informações. Utilizando tecnologias de IA e OCR, a solução entregue trouxe ganho significativo de produtividade, redução de esforço manual e maior confiabilidade nos dados extraídos. O time demonstrou domínio técnico, agilidade no atendimento e boa capacidade de adaptação às nossas necessidades, entregando resultados alinhados com o que foi proposto.', role: 'Diretor Tecnologia e Inovação, Locx' },
      en: { quote: 'Bytewer was an important partner in a strategic demand for our company, supporting the automated reading of documents and tabulation of key information. Using AI and OCR, the delivered solution brought a significant productivity gain, reduction in manual effort and greater data reliability. The team showed technical mastery, agility and adaptability to our needs, delivering results aligned with what was proposed.', role: 'Director of Technology and Innovation, Locx' },
      author: 'Douglas de Andrade',
      order: 4,
    },
  ]

  for (const t of testimonials) {
    const created = await payload.create({
      collection: 'testimonials',
      locale: 'pt-BR',
      context: { disableRevalidate: true },
      data: { author: t.author, order: t.order, quote: t.pt.quote, role: t.pt.role },
    })
    await payload.update({
      collection: 'testimonials',
      id: created.id,
      locale: 'en',
      context: { disableRevalidate: true },
      data: { quote: t.en.quote, role: t.en.role },
    })
  }
}
