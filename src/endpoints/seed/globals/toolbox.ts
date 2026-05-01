import type { Payload } from 'payload'
import type { Media } from '@/payload-types'

export async function seedToolbox({
  payload,
  n8nLogo,
  openaiLogo,
  evolutionLogo,
}: {
  payload: Payload
  n8nLogo: Media
  openaiLogo: Media
  evolutionLogo: Media
}) {
  await payload.updateGlobal({
    slug: 'toolbox',
    locale: 'pt-BR',
    context: { disableRevalidate: true },
    data: {
      badge: 'Stack Bytewer',
      heading: 'Nossa',
      headingHighlight: 'Toolbox',
      subtitle:
        'Um arsenal de tecnologias de ponta selecionadas para garantir que sua solução seja robusta, escalável e preparada para o futuro.',
      categories: [
        {
          category: 'Back-end & Data',
          iconName: 'Database',
          items: [
            { name: 'Python', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'FastAPI', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'PostgreSQL', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'Neo4j', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
          ],
        },
        {
          category: 'Front-end & Mobile',
          iconName: 'Code',
          items: [
            { name: 'React', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Tailwind', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Expo', externalLogoUrl: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg' },
          ],
        },
        {
          category: 'Automações & IA',
          iconName: 'Zap',
          items: [
            { name: 'n8n', logo: n8nLogo.id },
            { name: 'OpenAI', logo: openaiLogo.id },
            { name: 'WhatsApp', externalLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
            { name: 'Evolution', logo: evolutionLogo.id },
          ],
        },
        {
          category: 'DevOps & Cloud',
          iconName: 'Settings',
          items: [
            { name: 'Docker', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Kubernetes', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
            { name: 'Linux', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
            { name: 'Grafana', externalLogoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
          ],
        },
      ],
    },
  })

  const toolboxPt = await payload.findGlobal({ slug: 'toolbox', locale: 'pt-BR' })
  const toolboxCategoryNamesEn = ['Back-end & Data', 'Front-end & Mobile', 'Automations & AI', 'DevOps & Cloud']
  await payload.updateGlobal({
    slug: 'toolbox',
    locale: 'en',
    context: { disableRevalidate: true },
    data: {
      badge: 'Bytewer Stack',
      heading: 'Our',
      headingHighlight: 'Toolbox',
      subtitle:
        'A cutting-edge technology arsenal selected to ensure your solution is robust, scalable and future-ready.',
      categories: (toolboxPt.categories ?? []).map((cat: any, i: number) => ({
        id: cat.id,
        category: toolboxCategoryNamesEn[i],
        iconName: cat.iconName,
        items: (cat.items ?? []).map((it: any) => ({
          id: it.id,
          name: it.name,
          logo: typeof it.logo === 'object' && it.logo !== null ? it.logo.id : it.logo,
          externalLogoUrl: it.externalLogoUrl,
        })),
      })),
    },
  })
}
