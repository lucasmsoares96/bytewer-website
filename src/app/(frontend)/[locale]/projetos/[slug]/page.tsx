import type { Metadata } from 'next'

import configPromise from '@payload-config'
import Image from 'next/image'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { getPayload, type TypedLocale } from 'payload'

import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import RichText from '@/components/RichText'
import type { Media } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { JsonLd } from '@/components/JsonLd'
import { buildBreadcrumbLd, buildProductLd } from '@/utilities/jsonLd'
import { getServerSideURL } from '@/utilities/getURL'
import { SUPPORTED_LOCALES } from '../../layout'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  const params: { locale: string; slug: string }[] = []
  for (const locale of SUPPORTED_LOCALES) {
    projects.docs?.forEach((doc) => {
      if (doc.slug) params.push({ locale, slug: doc.slug })
    })
  }
  return params
}

type Args = {
  params: Promise<{
    locale?: string
    slug?: string
  }>
}

export default async function ProjectDetailPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '', locale } = await paramsPromise
  const typedLocale = locale as TypedLocale | undefined
  const decodedSlug = decodeURIComponent(slug)
  const url = `/${locale ?? 'pt-BR'}/projetos/${decodedSlug}`
  const project = await queryProjectBySlug({ slug: decodedSlug, locale: typedLocale })

  if (!project) return <PayloadRedirects url={url} />

  const image = typeof project.image === 'object' ? (project.image as Media) : null

  const serverUrl = getServerSideURL()
  const localeSegment = locale ?? 'pt-BR'
  const canonicalUrl = `${serverUrl}/${localeSegment}/projetos/${decodedSlug}`
  const projectImagePath = image?.url ?? undefined
  const projectImageUrl = projectImagePath
    ? projectImagePath.startsWith('http')
      ? projectImagePath
      : `${serverUrl}${projectImagePath}`
    : undefined
  const productLd = buildProductLd({
    url: canonicalUrl,
    name: project.title ?? '',
    description: project.description ?? undefined,
    imageUrl: projectImageUrl,
  })
  const breadcrumbLd = buildBreadcrumbLd([
    { name: 'Home', url: `${serverUrl}/${localeSegment}` },
    { name: 'Projetos', url: `${serverUrl}/${localeSegment}/projetos` },
    { name: project.title ?? '', url: canonicalUrl },
  ])

  return (
    <article className="bg-bytewer-bg text-white pt-24 md:pt-32 pb-24">
      <JsonLd data={productLd} />
      <JsonLd data={breadcrumbLd} />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      <div className="container max-w-5xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{project.title}</h1>
          <p className="text-lg text-gray-300 max-w-3xl">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            {project.duration && (
              <span>
                <strong className="text-brand">Duração:</strong> {project.duration}
              </span>
            )}
            {project.team && (
              <span>
                <strong className="text-brand">Equipe:</strong> {project.team}
              </span>
            )}
          </div>
        </header>

        {image?.url && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={image.url}
              alt={image.alt ?? project.title ?? ''}
              width={image.width ?? 1600}
              height={image.height ?? 900}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand">Principais Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-white/10 bg-bytewer-surface px-4 py-3"
                >
                  {f.feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.fullDescription && (
          <section className="mb-12 prose prose-invert max-w-none">
            <RichText data={project.fullDescription} enableGutter={false} />
          </section>
        )}

        {project.challenge && (
          <section className="mb-12 prose prose-invert max-w-none">
            <h2 className="text-brand">O Desafio</h2>
            <RichText data={project.challenge} enableGutter={false} />
          </section>
        )}

        {project.solution && (
          <section className="mb-12 prose prose-invert max-w-none">
            <h2 className="text-brand">A Solução</h2>
            <RichText data={project.solution} enableGutter={false} />
          </section>
        )}

        {project.results && project.results.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand">Resultados</h2>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-white/10 bg-bytewer-surface px-4 py-3"
                >
                  {r.result}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand">Tecnologias</h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t, i) => (
                <li
                  key={i}
                  className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-sm text-brand"
                >
                  {t.name}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise
  const typedLocale = locale as TypedLocale | undefined
  const decodedSlug = decodeURIComponent(slug)
  const project = await queryProjectBySlug({ slug: decodedSlug, locale: typedLocale })
  return generateMeta({ doc: project, locale: typedLocale })
}

const queryProjectBySlug = cache(
  async ({ slug, locale }: { slug: string; locale?: TypedLocale }) => {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'projects',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      ...(locale ? { locale } : {}),
      where: { slug: { equals: slug } },
    })

    return result.docs?.[0] ?? null
  },
)
