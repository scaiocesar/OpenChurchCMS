import { MetadataRoute } from 'next'
import { localePrefixMode } from '@/i18n/localePrefix'
import { routing } from '@/i18n/routing'
import { getActiveSections, getHomeContentMap } from '@/lib/publicSite'

function localePrefix(locale: string): string {
  const mode = localePrefixMode()
  const needsPrefix =
    mode === 'always' || (mode === 'as-needed' && locale !== routing.defaultLocale)
  if (!needsPrefix) {
    return ''
  }
  return `/${locale}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const fallback = 'https://sthenryutah.org'
  const [sections, homeContentMap] = await Promise.all([getActiveSections(), getHomeContentMap()])
  const origin = (homeContentMap.websiteUrl || fallback).replace(/\/$/, '')

  const entries: MetadataRoute.Sitemap = []

  for (const locale of routing.locales) {
    const p = localePrefix(locale)
    const basePath = p === '' ? '/' : p

    entries.push({
      url: `${origin}${basePath === '/' ? '' : basePath}` || origin,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })

    const pageUrl = (suffix: string) => ({
      url: `${origin}${p}${suffix}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8 as const,
    })

    entries.push(
      pageUrl('/#schedule'),
      pageUrl('/#gallery'),
      pageUrl('/#contact'),
    )

    for (const section of sections) {
      entries.push({
        url: `${origin}${p}/sections/${section.category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  return entries
}
