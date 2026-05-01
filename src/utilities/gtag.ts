export const ADS_ID = 'AW-16860256932'

const CONVERSION_LABELS: Record<string, string> = {
  '/automacao': 'KAeKCJqc7oUcEKS1zOc-',
  '/juridico': 'ytkjCJSc7oUcEKS1zOc-',
  '/clinicas': 'E3OKCJec7oUcEKS1zOc-',
  '/protecao-veicular': 'hH9BCJ2c7oUcEKS1zOc-',
}

declare global {
  interface Window {
    __googleAdsLoading?: Promise<void>
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function loadGoogleAds() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.__googleAdsLoading) return window.__googleAdsLoading

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', ADS_ID)

  window.__googleAdsLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Google Ads'))
    document.head.appendChild(script)
  })

  return window.__googleAdsLoading
}

export function trackConversion(route: string) {
  const label = CONVERSION_LABELS[route]
  if (label && typeof window !== 'undefined') {
    void loadGoogleAds().then(() => {
      window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${label}` })
    })
  }
}
