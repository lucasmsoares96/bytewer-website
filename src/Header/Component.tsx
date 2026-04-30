import { HeaderClient } from './Component.client'
import configPromise from '@payload-config'
import { getPayload, type TypedLocale } from 'payload'
import React from 'react'
import { draftMode } from 'next/headers'
import { AdminBar } from '@/components/AdminBar'

export async function Header({ locale }: { locale?: TypedLocale } = {}) {
  const payload = await getPayload({ config: configPromise })
  const headerData = await payload.findGlobal({
    slug: 'header',
    depth: 1,
    locale: locale ?? 'pt-BR',
  })
  
  const { isEnabled } = await draftMode()

  return (
    <HeaderClient
      data={headerData}
      locale={locale ?? 'pt-BR'}
      adminBar={<AdminBar adminBarProps={{ preview: isEnabled }} />}
    />
  )
}
