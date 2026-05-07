'use client'

export const dynamic = 'force-dynamic'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function AdminPage() {
  const t = useTranslations('Admin')

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">{t('dashboardTitle')}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/admin/users" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">{t('adminUsers')}</h2>
          <p className="text-gray-600">{t('manageUsers')}</p>
        </Link>
        <Link href="/admin/schedule" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">{t('massSchedule')}</h2>
          <p className="text-gray-600">{t('manageSchedule')}</p>
        </Link>
        <Link href="/admin/special" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">{t('specialMasses')}</h2>
          <p className="text-gray-600">{t('manageSpecial')}</p>
        </Link>
        <Link href="/admin/gallery" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">{t('gallery')}</h2>
          <p className="text-gray-600">{t('manageGallery')}</p>
        </Link>
        <Link href="/admin/social" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">{t('social')}</h2>
          <p className="text-gray-600">{t('manageSocial')}</p>
        </Link>
      </div>
    </div>
  )
}
