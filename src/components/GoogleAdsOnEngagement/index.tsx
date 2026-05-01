'use client'

import { useEffect } from 'react'

import { loadGoogleAds } from '@/utilities/gtag'

export function GoogleAdsOnEngagement() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const
    const load = () => {
      for (const event of events) window.removeEventListener(event, load)
      void loadGoogleAds()
    }

    for (const event of events) {
      window.addEventListener(event, load, { once: true, passive: true })
    }

    return () => {
      for (const event of events) window.removeEventListener(event, load)
    }
  }, [])

  return null
}
