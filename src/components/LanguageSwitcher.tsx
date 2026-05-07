'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Language')

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="sr-only">{t('label')}</span>
      <select
        value={locale}
        aria-label={t('label')}
        onChange={(e) => {
          router.replace(pathname, { locale: e.target.value })
        }}
        className="rounded border border-gray-300 bg-white px-2 py-1 text-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {t(loc)}
          </option>
        ))}
      </select>
    </label>
  )
}
