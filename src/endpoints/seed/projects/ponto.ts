import type { Media } from '@/payload-types'
import { para, richText } from '../helpers'

export function ponto({ image }: { image: Media }) {
  const pt = {
    title: 'Sistema de Ponto Eletrônico',
    slug: 'ponto-eletronico',
    description: 'Controle total para o RH com app mobile, reconhecimento facial e geolocalização.',
    image: image.id,
    meta: {
      title: 'Sistema de Ponto Eletrônico com Reconhecimento Facial e GPS',
      description:
        'Controle total da jornada para o RH com app mobile, reconhecimento facial e geolocalização GPS para validar a marcação de ponto em tempo real.',
      image: image.id,
    },
    _status: 'published' as const,
    features: [
      { feature: 'Reconhecimento Facial' },
      { feature: 'Geolocalização (GPS)' },
      { feature: 'Dashboard RH' },
      { feature: 'App Mobile' },
    ],
    challenge: richText([
      para('Empresas com equipes de campo enfrentam dificuldades para controlar a jornada de trabalho de forma confiável, com problemas de fraude (ponto batido por terceiros) e falta de visibilidade da localização real dos colaboradores.'),
    ]) as any,
    solution: richText([
      para('Desenvolvemos um aplicativo web/mobile multiplataforma com React Native que utiliza reconhecimento facial para autenticação do colaborador no momento da marcação do ponto, combinado com geolocalização GPS para verificar sua localização. O sistema inclui dashboards web para o RH visualizar relatórios, gerenciar jornadas e exportar dados para folha de pagamento.'),
    ]) as any,
    results: [
      { result: 'Eliminação de 100% das fraudes de ponto' },
      { result: 'Visibilidade da localização dos colaboradores no momento do ponto' },
      { result: 'Redução de 80% no tempo de fechamento de folha de pagamento' },
      { result: 'Interface intuitiva com adoção de 95% pelos colaboradores' },
    ],
    technologies: [
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'AWS' },
    ],
    duration: '6 meses',
    team: '3 desenvolvedores',
  }

  const en = {
    title: 'Time Tracking System',
    description: 'Complete HR control with mobile app, facial recognition and geolocation.',
    meta: {
      title: 'Time Tracking System with Facial Recognition and GPS',
      description:
        'Complete HR control over work hours with mobile app, facial recognition and GPS geolocation to validate clock-ins in real time.',
      image: image.id,
    },
    features: [
      { feature: 'Facial Recognition' },
      { feature: 'Geolocation (GPS)' },
      { feature: 'HR Dashboard' },
      { feature: 'Mobile App' },
    ],
    challenge: richText([
      para("Companies with field teams face difficulties reliably controlling work hours, with fraud problems (time punched by third parties) and lack of visibility of employees' real location."),
    ]) as any,
    solution: richText([
      para('We developed a cross-platform web/mobile application with React Native that uses facial recognition to authenticate the employee at the time of clocking in, combined with GPS geolocation to verify their location. The system includes web dashboards for HR to view reports, manage work hours and export data to payroll.'),
    ]) as any,
    results: [
      { result: 'Elimination of 100% of time clock fraud' },
      { result: 'Visibility of employee location at time of clock-in' },
      { result: '80% reduction in payroll closing time' },
      { result: 'Intuitive interface with 95% adoption by employees' },
    ],
    duration: '6 months',
    team: '3 developers',
  }

  return { pt, en }
}
