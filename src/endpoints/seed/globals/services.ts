import type { Payload } from 'payload'

export async function seedServices({ payload }: { payload: Payload }) {
  await payload.updateGlobal({
    slug: 'services',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: {
      heading: 'Nossos',
      headingHighlight: 'Serviços',
      subtitle: 'Soluções de ponta a ponta projetadas para escalar o seu negócio.',
      items: [
        { iconName: 'Bot', title: 'Automações com IA', description: 'Deixe que a IA generativa tome conta das tarefas repetitivas e foque no que gera valor.' },
        { iconName: 'Smartphone', title: 'Aplicações Multiplataforma', description: 'Transforme seus desafios em oportunidades com aplicativos que rodam em qualquer dispositivo.' },
        { iconName: 'Lightbulb', title: 'Consultoria de Inovação', description: 'Identifique exatamente quais são os gargalos da sua operação e tenha um roteiro personalizado para solução.' },
        { iconName: 'Rocket', title: 'Venture Building', description: 'Receba todo o apoio jurídico, contábil, financeiro, comercial e tecnológico necessário para maximizar o impacto da sua startup.' },
      ],
    },
  })

  const servicesPt = await payload.findGlobal({ slug: 'services', locale: 'pt-BR' })
  const servicesItemsEn = [
    { title: 'AI Automations', description: 'Let generative AI take care of repetitive tasks so you can focus on what creates value.' },
    { title: 'Multi-platform Applications', description: 'Turn your challenges into opportunities with apps that run on any device.' },
    { title: 'Innovation Consulting', description: 'Identify exactly what the bottlenecks in your operation are and get a personalized roadmap to solve them.' },
    { title: 'Venture Building', description: "Receive all the legal, accounting, financial, commercial and technological support needed to maximize your startup's impact." },
  ]
  await payload.updateGlobal({
    slug: 'services',
    locale: 'en',
    context: { disableRevalidate: true },
    data: {
      heading: 'Our',
      headingHighlight: 'Services',
      subtitle: 'End-to-end solutions designed to scale your business.',
      items: (servicesPt.items ?? []).map((it: any, i: number) => ({
        id: it.id,
        iconName: it.iconName,
        title: servicesItemsEn[i]?.title,
        description: servicesItemsEn[i]?.description,
      })),
    },
  })
}
