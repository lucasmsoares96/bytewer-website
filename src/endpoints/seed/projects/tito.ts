import type { Media } from '@/payload-types'
import { para, richText } from '../helpers'

export function tito({ image }: { image: Media }) {
  const pt = {
    title: 'Tito - Saúde e Segurança',
    slug: 'tito',
    description:
      'Plataforma completa de gestão de saúde e segurança do trabalho. Dashboard analítico para visualização de dados fornecidos pelo SOC.',
    image: image.id,
    meta: {
      title: 'Tito — Plataforma de Gestão de Saúde e Segurança do Trabalho',
      description:
        'Plataforma completa de gestão de saúde e segurança do trabalho. Dashboard analítico para visualização de dados fornecidos pelo SOC.',
      image: image.id,
    },
    _status: 'published' as const,
    features: [{ feature: 'Dashboards' }, { feature: 'PGR/PCMSO' }, { feature: 'eSocial' }],
    challenge: richText([
      para('A empresa enfrentava a dificuldade de visualizar e analisar, de forma centralizada, os dados já existentes no SOC, sistema utilizado para a gestão de saúde e segurança do trabalho. Havia a necessidade de integrar essas informações a uma plataforma mais moderna, intuitiva e amigável, que facilitasse a tomada de decisão.'),
    ]) as any,
    solution: richText([
      para('Desenvolvemos uma plataforma web que possibilitou a consolidação e a visualização dos dados provenientes do SOC em um único ambiente, mais moderno e intuitivo. A solução centraliza informações como documentos regulatórios (PGR e PCMSO), integração com o eSocial, dados de exames ocupacionais, indicadores de absenteísmo e a listagem de funcionários. Com essa abordagem, os dados passaram a ser acessados de forma clara e organizada, contribuindo para maior eficiência na gestão de saúde e segurança do trabalho. A plataforma foi desenvolvida utilizando React Native e TypeScript no frontend, Python com FastAPI no backend e PostgreSQL como banco de dados, garantindo desempenho, escalabilidade e confiabilidade.'),
    ]) as any,
    results: [
      { result: 'Redução de 70% no tempo de gestão de documentos regulatórios' },
      { result: '100% de conformidade com eSocial alcançada' },
      { result: 'Dashboard em tempo real com visibilidade completa de riscos' },
      { result: 'Automatização completa do controle de EPIs' },
    ],
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
    ],
    duration: '9 meses (ainda em desenvolvimento)',
    team: '4 desenvolvedores',
  }

  const en = {
    title: 'Tito - Health & Safety',
    description:
      'Complete occupational health and safety management platform. Analytical dashboard to visualize SOC-provided data.',
    meta: {
      title: 'Tito — Occupational Health and Safety Management Platform',
      description:
        'Complete occupational health and safety management platform. Analytical dashboard to visualize SOC-provided data.',
      image: image.id,
    },
    features: [{ feature: 'Dashboards' }, { feature: 'PGR/PCMSO' }, { feature: 'eSocial' }],
    challenge: richText([
      para('The company faced the difficulty of visualizing and analyzing, in a centralized manner, the data already existing in SOC, a system used for occupational health and safety management. There was a need to integrate this information into a more modern, intuitive and user-friendly platform that would facilitate decision-making.'),
    ]) as any,
    solution: richText([
      para('We developed a web platform that enabled the consolidation and visualization of data from SOC in a single, more modern and intuitive environment. The solution centralizes information such as regulatory documents (PGR and PCMSO), eSocial integration, occupational examination data, absenteeism indicators, and employee listings. With this approach, data became accessible in a clear and organized manner, contributing to greater efficiency in occupational health and safety management. The platform was developed using React Native and TypeScript on the frontend, Python with FastAPI on the backend, and PostgreSQL as the database, ensuring performance, scalability, and reliability.'),
    ]) as any,
    results: [
      { result: '70% reduction in regulatory document management time' },
      { result: '100% eSocial compliance achieved' },
      { result: 'Real-time dashboard with complete risk visibility' },
      { result: 'Complete automation of PPE control' },
    ],
    duration: '9 months (still in development)',
    team: '4 developers',
  }

  return { pt, en }
}
