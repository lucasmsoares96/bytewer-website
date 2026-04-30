import { homeFaqPt } from './faq'

export function buildHomeLayoutPt({
  projectIds,
}: {
  projectIds: (number | string)[]
}) {
  return [
    { blockType: 'servicesBlock', anchor: 'services' },
    {
      blockType: 'differentialsBlock',
      anchor: 'differentials',
      badge: 'POR QUE ESCOLHER A BYTEWER',
      heading: 'Engenharia de',
      headingHighlight: 'Elite',
      subtitle:
        'Nossa abordagem técnica elimina débitos técnicos antes que eles existam, focando em escalabilidade, performance e manutenibilidade.',
      items: [
        { iconName: 'Smartphone', title: '1 Código, 3 Plataformas', description: 'Utilizamos React Native para compartilhar até 95% do código entre Web, iOS e Android. Reduza custos de desenvolvimento e manutenção drasticamente sem perder performance nativa.' },
        { iconName: 'TrendingUp', title: 'Escala Infinita', description: 'Arquitetura baseada em Kubernetes que escala horizontalmente. De 10 a 10 milhões de usuários sem downtime.' },
        { iconName: 'Server', title: 'Backend Universal', description: 'Python + FastAPI. Um ecossistema rico pronto para Inteligência Artificial, Ciência de Dados e APIs de alta performance.' },
        { iconName: 'Repeat', title: 'Desenvolvimento Ágil Real', description: 'Sem burocracia corporativa. Entregas contínuas, comunicação transparente e adaptação rápida. Você acompanha cada sprint em tempo real.' },
      ],
    },
    { blockType: 'toolboxBlock', anchor: 'tech-stack' },
    {
      blockType: 'portfolioBlock',
      anchor: 'portfolio',
      badge: 'Nosso Trabalho',
      heading: 'Nossos',
      headingHighlight: 'Projetos',
      subtitle: 'Combinamos design e engenharia robusta para criar produtos digitais que escalam.',
      projects: projectIds,
      viewAllLabel: 'Ver Todos os Projetos',
      viewAllHref: '/#contact',
    },
    {
      blockType: 'statsBlock',
      anchor: 'stats',
      items: [
        { label: 'das empresas já usam IA', value: '72', suffix: '%', source: 'CNN Brasil' },
        { label: 'economia no desenvolvimento multiplataforma', value: '1/3' },
        { label: 'escalabilidade com nossa infraestrutura', value: '∞' },
      ],
    },
    {
      blockType: 'testimonialsBlock',
      anchor: 'testimonials',
      badge: 'Depoimentos',
      heading: 'O que nossos parceiros dizem',
      subtitle: 'Veja o que nossos clientes dizem sobre a experiência de trabalhar conosco',
      items: [
        { quote: 'Obrigado, Bytewer, por entregar mais que tecnologia — visão, agilidade e confiança. Parceria certa muda o jogo!', author: 'Alisson', role: 'COO, Tito' },
        { quote: 'É um prazer e recomendar a Bytewer como parceiro estratégico no desenvolvimento de soluções tecnológicas avançadas. Recentemente, contratamos a Bytewer para criar uma aplicação baseada em IA, com o objetivo de automatizar a leitura de contratos de locação, extrair dados relevantes e preencher colunas de uma planilha, gerando uma base de dados precisa e eficiente. O projeto foi um verdadeiro sucesso desde o início. A aplicação foi implementada rapidamente, com a Bytewer demonstrando grande agilidade e competência técnica. A assertividade da IA passou de 85% para mais 97% graças às melhorias contínuas nos prompts, o que garantiu maior precisão e eficiência na extração de dados. Recomendamos a Bytewer com total confiança para qualquer empresa que busque inovação, qualidade e resultados consistentes em projetos de tecnologia avançada.', author: 'Israel', role: 'PO, Locx' },
        { quote: 'Recomendo a Bytewer com muita alegria e satisfação! Entregam o que prometem, cumprem cronograma, são diretos e objetivos, sem contar que abraçam o projeto e dão a visão que nós leigos não temos em riqueza de detalhes! Acertamos muito na escolha dessa empresa como desenvolvedora do nosso projeto! Com certeza seremos parceiros por muito tempo!', author: 'Bruna Fernandes', role: 'Sócia/Gestora, Faccia' },
        { quote: 'A Bytewer foi uma parceira importante em uma demanda estratégica da nossa empresa, apoiando o processo de leitura automatizada de documentos e tabulação das principais informações. Utilizando tecnologias de IA e OCR, a solução entregue trouxe ganho significativo de produtividade, redução de esforço manual e maior confiabilidade nos dados extraídos. O time demonstrou domínio técnico, agilidade no atendimento e boa capacidade de adaptação às nossas necessidades, entregando resultados alinhados com o que foi proposto.', author: 'Douglas de Andrade', role: 'Diretor Tecnologia e Inovação, Locx' },
      ],
    },
    homeFaqPt,
    {
      blockType: 'blogBlock',
      anchor: 'blog',
      badge: 'BLOG',
      heading: 'Nossos Últimos',
      headingHighlight: 'Artigos',
      subtitle: 'Fique por dentro das novidades do mundo da tecnologia e IA.',
      limit: 3,
    },
    { blockType: 'teamBlock', anchor: 'team' },
    {
      blockType: 'ctaBlock',
      anchor: 'contact',
      badge: 'Vamos conversar?',
      title: 'Pronto para escalar',
      titleHighlight: 'sua operação?',
      description:
        'Não deixe para depois a inovação que seu negócio precisa hoje. Clique no botão abaixo e fale com nossa equipe.',
      disclaimer: 'Resposta imediata. Sem compromisso.',
      channelLabel: 'Escolha seu canal de contato preferido:',
      channels: [
        { type: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/553798719201' },
        { type: 'messenger', label: 'Messenger', href: 'https://m.me/477932758737919' },
        { type: 'instagram', label: 'Instagram', href: 'https://ig.me/m/bytewer' },
        { type: 'email', label: 'Email', href: 'mailto:contato@bytewer.com' },
      ],
    },
  ]
}
