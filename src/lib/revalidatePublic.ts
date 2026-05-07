import { revalidatePath, revalidateTag } from 'next/cache'
import { localePrefixMode } from '@/i18n/localePrefix'
import { routing } from '@/i18n/routing'

const PUBLIC_TAGS = [
  'home-content',
  'seo',
  'sections',
  'social-links',
  'mass-schedules',
  'special-masses',
  'gallery-photos',
  'bulletins',
  'locations',
] as const

const PUBLIC_PATH_SUFFIXES = ['/', '/gallery', '/bulletin'] as const

function localizedPaths(suffix: string): string[] {
  const mode = localePrefixMode()
  return routing.locales.map((locale) => {
    const needsLocalePrefix =
      mode === 'always' || (mode === 'as-needed' && locale !== routing.defaultLocale)

    if (!needsLocalePrefix) {
      return suffix
    }
    return suffix === '/' ? `/${locale}` : `/${locale}${suffix}`
  })
}

export function revalidatePublicContent() {
  PUBLIC_TAGS.forEach((tag) => revalidateTag(tag, 'max'))
  for (const suffix of PUBLIC_PATH_SUFFIXES) {
    localizedPaths(suffix).forEach((path) => revalidatePath(path))
  }
  revalidatePath('/sitemap.xml')
}
