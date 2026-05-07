import { getTranslations } from 'next-intl/server'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { getBulletins } from '@/lib/publicSite'

type BulletinRow = {
  id: number
  isCurrent: boolean
  title: string
  publishDate: Date
  description: string | null
  url: string
}

export default async function BulletinPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dateLocale = locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en-US'
  const bulletins = (await getBulletins()) as BulletinRow[]
  const t = await getTranslations('BulletinPage')

  const currentBulletin = bulletins.find((b) => b.isCurrent)
  const historyBulletins = bulletins.filter((b) => !b.isCurrent)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-default.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-4 sm:px-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
            {t('title')}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-5">
          {currentBulletin ? (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[var(--primary)] mb-4">{t('current')}</h2>
              <div className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-lg p-8 border-l-4 border-[var(--primary)]">
                <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">
                  {currentBulletin.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {new Date(currentBulletin.publishDate).toLocaleDateString(dateLocale, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {currentBulletin.description && (
                  <p className="text-gray-600 mb-6">{currentBulletin.description}</p>
                )}
                <a
                  href={currentBulletin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded font-semibold hover:bg-[#5ab0d4] transition"
                >
                  {t('viewPdf')}
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8 mb-12">
              <p className="text-lg">{t('noCurrent')}</p>
            </div>
          )}

          {historyBulletins.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-6">{t('past')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {historyBulletins.map((bulletin) => (
                  <div
                    key={bulletin.id}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-[var(--secondary)] mb-1">{bulletin.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(bulletin.publishDate).toLocaleDateString(dateLocale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {bulletin.description && (
                      <p className="text-sm text-gray-600 mb-4">{bulletin.description}</p>
                    )}
                    <a
                      href={bulletin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] hover:underline text-sm font-medium"
                    >
                      {t('viewPdfShort')}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bulletins.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              <p className="text-lg">{t('emptyLine1')}</p>
              <p className="mt-2">{t('emptyLine2')}</p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
