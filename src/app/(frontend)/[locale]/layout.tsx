import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import React from 'react'

import { ADS_ID } from '@/utilities/gtag'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getSiteSEO } from '@/utilities/getSiteSEO'
import { JsonLd } from '@/components/JsonLd'
import { buildOrganizationLd, buildWebSiteLd } from '@/utilities/jsonLd'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import '../globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import type { TypedLocale } from 'payload'

export const SUPPORTED_LOCALES = ['pt-BR', 'en'] as const
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number]

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!(SUPPORTED_LOCALES as readonly string[]).includes(locale)) {
    notFound()
  }
  const typedLocale = locale as TypedLocale
  const { isEnabled } = await draftMode()
  const seo = await getSiteSEO(typedLocale)
  const faviconUrl = seo.faviconUrl
  const faviconType = seo.faviconMimeType
  const siteUrl = getServerSideURL()
  const orgName = seo.siteName ?? seo.metaTitle ?? 'Bytewer'
  const organizationLd = buildOrganizationLd({
    siteUrl,
    name: orgName,
    logoUrl: seo.ogImageUrl,
  })
  const websiteLd = buildWebSiteLd({ siteUrl, name: orgName })

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable, inter.variable)}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        {faviconUrl ? (
          <link href={faviconUrl} rel="icon" type={faviconType ?? undefined} />
        ) : (
          <>
            <link href="/favicon.ico" rel="icon" sizes="32x32" />
            <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          </>
        )}
      </head>
      <body className="bg-bytewer-bg text-white" suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ADS_ID}');
          `}
        </Script>
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <Providers>
          <Header locale={typedLocale} />
          <main>{children}</main>
          <Footer locale={typedLocale} />
        </Providers>
      </body>
    </html>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!(SUPPORTED_LOCALES as readonly string[]).includes(locale)) {
    return { metadataBase: new URL(getServerSideURL()) }
  }
  const seo = await getSiteSEO(locale as TypedLocale)
  return {
    metadataBase: new URL(getServerSideURL()),
    title: seo.metaTitle ?? seo.siteName,
    description: seo.metaDescription,
    openGraph: mergeOpenGraph({
      siteName: seo.siteName,
      title: seo.metaTitle ?? seo.siteName,
      description: seo.metaDescription,
      images: seo.ogImageUrl ? [{ url: seo.ogImageUrl }] : undefined,
    }),
    twitter: {
      card: 'summary_large_image',
      creator: seo.twitterHandle ?? undefined,
    },
  }
}
