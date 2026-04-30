export const ADS_ID = 'AW-16860256932'

const CONVERSION_LABELS: Record<string, string> = {
  '/automacao': 'KAeKCJqc7oUcEKS1zOc-',
  '/juridico': 'ytkjCJSc7oUcEKS1zOc-',
  '/clinicas': 'E3OKCJec7oUcEKS1zOc-',
  '/protecao-veicular': 'hH9BCJ2c7oUcEKS1zOc-',
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackConversion(route: string) {
  const label = CONVERSION_LABELS[route]
  if (label && typeof window !== 'undefined') {
    window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${label}` })
  }
}
