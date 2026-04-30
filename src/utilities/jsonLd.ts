const SCHEMA_CONTEXT = 'https://schema.org'

export type OrganizationLdInput = {
  siteUrl: string
  name: string
  logoUrl?: string
}

export const buildOrganizationLd = ({
  siteUrl,
  name,
  logoUrl,
}: OrganizationLdInput): Record<string, unknown> => {
  const data: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    name,
    url: siteUrl,
  }
  if (logoUrl) data.logo = logoUrl
  return data
}

export type WebSiteLdInput = {
  siteUrl: string
  name: string
}

export const buildWebSiteLd = ({
  siteUrl,
  name,
}: WebSiteLdInput): Record<string, unknown> => {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    name,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export type ArticleLdInput = {
  url: string
  title: string
  description?: string
  imageUrl?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
}

export const buildArticleLd = ({
  url,
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
}: ArticleLdInput): Record<string, unknown> => {
  const data: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Article',
    headline: title,
    mainEntityOfPage: url,
    url,
  }
  if (description) data.description = description
  if (imageUrl) data.image = imageUrl
  if (datePublished) data.datePublished = datePublished
  if (dateModified) data.dateModified = dateModified
  if (authorName) {
    data.author = {
      '@type': 'Person',
      name: authorName,
    }
  }
  return data
}

export type BreadcrumbItem = {
  name: string
  url: string
}

export const buildBreadcrumbLd = (
  items: BreadcrumbItem[],
): Record<string, unknown> => {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export type ServiceLdInput = {
  name: string
  description?: string
  providerName: string
  providerUrl: string
  areaServed?: string
  serviceType?: string
}

export const buildServiceLd = ({
  name,
  description,
  providerName,
  providerUrl,
  areaServed,
  serviceType,
}: ServiceLdInput): Record<string, unknown> => {
  const data: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Service',
    name,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: providerUrl,
    },
  }
  if (description) data.description = description
  if (areaServed) data.areaServed = areaServed
  if (serviceType) data.serviceType = serviceType
  return data
}

export type ReviewLdInput = {
  author: string
  reviewBody: string
  itemReviewedName: string
  ratingValue?: number
}

export const buildReviewLd = ({
  author,
  reviewBody,
  itemReviewedName,
  ratingValue,
}: ReviewLdInput): Record<string, unknown> => {
  const data: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewBody,
    itemReviewed: {
      '@type': 'Organization',
      name: itemReviewedName,
    },
  }
  if (ratingValue) {
    data.reviewRating = {
      '@type': 'Rating',
      ratingValue,
      bestRating: 5,
    }
  }
  return data
}

export type AggregateRatingLdInput = {
  itemName: string
  ratingValue: number
  reviewCount: number
}

export const buildAggregateRatingLd = ({
  itemName,
  ratingValue,
  reviewCount,
}: AggregateRatingLdInput): Record<string, unknown> => {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Organization',
      name: itemName,
    },
    ratingValue,
    reviewCount,
    bestRating: 5,
  }
}

export type ProductLdInput = {
  url: string
  name: string
  description?: string
  imageUrl?: string
}

export const buildProductLd = ({
  url,
  name,
  description,
  imageUrl,
}: ProductLdInput): Record<string, unknown> => {
  const data: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'CreativeWork',
    name,
    url,
  }
  if (description) data.description = description
  if (imageUrl) data.image = imageUrl
  return data
}
