import { faqAnswer } from '../../helpers'

export const homeFaqPt = {
  blockType: 'faq' as const,
  anchor: 'faq',
  heading: 'Perguntas Frequentes',
  subheading: 'Tem outra dúvida? Fale com a gente.',
  items: [
    {
      question: 'Quanto custa um projeto?',
      answer: faqAnswer('Não trabalhamos com tabela fixa porque cada projeto é único. Cobramos por **hora técnica durante o desenvolvimento** e uma **mensalidade recorrente** depois da entrega, que cobre infraestrutura, manutenção e um pacote de horas para correções e pequenas evoluções. Após uma conversa inicial, apresentamos um orçamento claro e detalhado, sem surpresas.')
    },
    {
      question: 'Quanto tempo demora pra ficar pronto?',
      answer: faqAnswer('Varia conforme o escopo, mas o ritmo é padrão: depois da **primeira sprint de 15 dias**, você já tem uma versão funcional pra testar. A partir daí evoluímos juntos em ciclos quinzenais até o produto ficar do jeito certo. Acreditamos que software nunca está 100% pronto, pois ele evolui com o uso real.')
    },
    {
      question: 'E se eu quiser mudar algo no meio do projeto?',
      answer: faqAnswer('Mudanças fazem parte. Trabalhamos com metodologia ágil justamente porque o entendimento evolui durante o desenvolvimento. Pequenos ajustes são naturais; mudanças de escopo maior são alinhadas em conjunto antes de seguir, com transparência total sobre prazo e custo.')
    },
    {
      question: 'A IA vai substituir minha equipe?',
      answer: faqAnswer('Sendo honestos: a IA **aumenta a capacidade da equipe sem precisar contratar mais gente**. Em alguns casos, pode permitir operar com equipe enxuta, o que depende do quanto da sua operação é repetitiva. O que vemos na prática é que as pessoas deixam de gastar tempo em tarefas mecânicas e passam a focar no que exige julgamento e decisão. O melhor resultado vem do híbrido, não da substituição total.')
    },
    {
      question: 'Vocês integram com o sistema que eu já uso?',
      answer: faqAnswer('Sim. Integramos com qualquer sistema que tenha API (ERPs, CRMs, e-commerces, planilhas, e por aí vai). E quando o sistema **não tem API**, conseguimos criar integrações customizadas via scraping ou RPA, permitindo que mesmo softwares fechados entrem na automação.')
    },
    {
      question: 'E depois que o sistema estiver no ar? Quem cuida?',
      answer: faqAnswer('Nós. A mensalidade inclui hospedagem, monitoramento e um **pacote de horas mensais** para correções, atualizações e pequenas novas funcionalidades. Você não é cobrado a cada problema que aparece, pois está tudo previsto. Se precisar de mais horas pontualmente, fazemos um orçamento adicional transparente.')
    },
    {
      question: 'Por que não usar um software pronto do mercado?',
      answer: faqAnswer('Você pode usar, e dizemos isso honestamente. Se existe uma ferramenta de prateleira que atende sua necessidade, talvez seja o melhor caminho. Mas quando seu processo é específico, quando você precisa integrar sistemas que não conversam, ou quando a "adaptação" do software pronto vira uma camisa de força, aí o desenvolvimento sob medida compensa. Nesse modelo, você paga só pelo que vai usar e o sistema cresce junto com a empresa.')
    }
  ],
}

export const homeFaqEn = {
  heading: 'Frequently Asked Questions',
  subheading: 'Have another question? Talk to us.',
  items: [
    {
      question: 'How much does a project cost?',
      answer: faqAnswer('We do not work with a fixed price list because every project is unique. We charge per **technical hour during development** and a **recurring monthly fee** after delivery, which covers infrastructure, maintenance, and a package of hours for fixes and minor evolutions. After an initial conversation, we present a clear and detailed estimate, with no surprises.')
    },
    {
      question: 'How long does it take to be ready?',
      answer: faqAnswer('It varies according to the scope, but the pace is standard: after the **first 15-day sprint**, you already have a functional version to test. From there, we evolve together in biweekly cycles until the product is exactly right. We believe software is never 100% done, as it evolves with real-world use.')
    },
    {
      question: 'What if I want to change something mid-project?',
      answer: faqAnswer('Changes are part of the process. We work with agile methodology precisely because understanding evolves during development. Minor adjustments are natural; major scope changes are aligned together before proceeding, with complete transparency regarding time and cost.')
    },
    {
      question: 'Will AI replace my team?',
      answer: faqAnswer('To be honest: AI **increases team capacity without needing to hire more people**. In some cases, it may allow operating with a lean team, which depends on how repetitive your operation is. What we see in practice is that people stop spending time on mechanical tasks and start focusing on what requires judgment and decision-making. The best result comes from a hybrid approach, not total substitution.')
    },
    {
      question: 'Do you integrate with the system I already use?',
      answer: faqAnswer('Yes. We integrate with any system that has an API (ERPs, CRMs, e-commerces, spreadsheets, and so on). And when the system **does not have an API**, we can build custom integrations via scraping or RPA, meaning even closed software can be automated.')
    },
    {
      question: 'And after the system goes live? Who takes care of it?',
      answer: faqAnswer('We do. The monthly fee includes hosting, monitoring, and a **package of monthly hours** for fixes, updates, and minor new features. You are not charged for every problem that arises, since it is all covered. If you need more hours occasionally, we provide a transparent additional estimate.')
    },
    {
      question: 'Why not use ready-made software from the market?',
      answer: faqAnswer('You can, and we say this honestly. If there is an off-the-shelf tool that meets your needs, it might be the best path. But when your process is specific, when you need to integrate systems that do not communicate, or when adapting to ready-made software becomes a straitjacket, custom development pays off. With this approach, you only pay for what you will use, and the system grows with your company.')
    }
  ]
}