import type { Media } from '@/payload-types'
import { para, richText } from '../helpers'

export function locx({ image }: { image: Media }) {
  const pt = {
    title: 'Locx - Automação Inteligente',
    slug: 'locx-ai',
    description: 'OCR e extração automatizada de dados de 13.000 contratos de locação com IA Generativa.',
    image: image.id,
    meta: {
      title: 'Locx — Extração Automatizada de Contratos com IA Generativa',
      description:
        'OCR e extração automatizada de dados de mais de 13.000 contratos de locação usando IA Generativa, GPT-4 e prompt engineering.',
      image: image.id,
    },
    _status: 'published' as const,
    features: [{ feature: 'OCR' }, { feature: 'IA Generativa' }, { feature: 'LLMs' }, { feature: 'Engenharia de Prompt' }],
    challenge: richText([
      para('Processar e extrair dados estruturados de mais de 13.000 contratos de locação em formatos variados (PDFs escaneados). O processo manual levaria meses e estaria sujeito a erros humanos. Era necessária uma solução que conseguisse lidar com diferentes layouts e qualidades de documentos.'),
    ]) as any,
    solution: richText([
      para('Implementamos um pipeline de processamento automatizado usando OCR avançado combinado com Large Language Models (LLMs) para extração inteligente de dados. A solução utiliza engenharia de prompts especializada para garantir precisão na extração, validação automática de dados, e armazenamento estruturado em banco de dados. Todo o processamento ocorre em backend sem necessidade de interface gráfica.'),
    ]) as any,
    results: [
      { result: '13.000 contratos processados automaticamente' },
      { result: 'Assertividade de 97% na extração de dados após otimização' },
      { result: 'Redução de 90% no tempo de processamento vs. método manual' },
      { result: 'Economia estimada de milhares de horas de trabalho manual' },
    ],
    technologies: [
      { name: 'Python' },
      { name: 'OpenAI GPT-4' },
      { name: 'OCR' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
    ],
    duration: '6 semanas',
    team: '2 desenvolvedores',
  }

  const en = {
    title: 'Locx - Intelligent Automation',
    description: 'OCR and automated data extraction from 13,000 rental contracts with Generative AI.',
    meta: {
      title: 'Locx — Intelligent Contract Automation with Generative AI',
      description:
        'OCR and automated data extraction from over 13,000 rental contracts using Generative AI, GPT-4 and specialized prompt engineering.',
      image: image.id,
    },
    features: [{ feature: 'OCR' }, { feature: 'Generative AI' }, { feature: 'LLMs' }, { feature: 'Prompt Engineering' }],
    challenge: richText([
      para('Processing and extracting structured data from over 13,000 rental contracts in various formats (scanned PDFs). The manual process would take months and be subject to human errors. A solution was needed that could handle different layouts and document qualities.'),
    ]) as any,
    solution: richText([
      para('We implemented an automated processing pipeline using advanced OCR combined with Large Language Models (LLMs) for intelligent data extraction. The solution uses specialized prompt engineering to ensure extraction accuracy, automatic data validation, and structured storage in the database. All processing occurs on the backend without the need for a graphical interface.'),
    ]) as any,
    results: [
      { result: '13,000 contracts processed automatically' },
      { result: '97% accuracy in data extraction after optimization' },
      { result: '90% reduction in processing time vs. manual method' },
      { result: 'Estimated savings of thousands of hours of manual work' },
    ],
    duration: '6 weeks',
    team: '2 developers',
  }

  return { pt, en }
}
