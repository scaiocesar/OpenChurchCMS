'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useEffect, useState } from 'react'

const menuItems = [
  { href: '/admin', labelKey: 'dashboard', icon: '◉' },
  { href: '/admin/home', labelKey: 'home', icon: '⌂' },
  { href: '/admin/about', labelKey: 'sections', icon: '☰' },
  { href: '/admin/location', labelKey: 'locations', icon: '◉' },
  { href: '/admin/schedule', labelKey: 'massSchedule', icon: '◷' },
  { href: '/admin/special', labelKey: 'specialMasses', icon: '★' },
  { href: '/admin/gallery', labelKey: 'gallery', icon: '◻' },
  { href: '/admin/bulletin', labelKey: 'bulletins', icon: '◫' },
  { href: '/admin/social', labelKey: 'social', icon: '🔗' },
  { href: '/admin/settings', labelKey: 'settings', icon: '⚙' },
  { href: '/admin/seo', labelKey: 'seo', icon: '◎' },
  { href: '/admin/password', labelKey: 'password', icon: '🔒' },
  { href: '/admin/users', labelKey: 'adminUsers', icon: '👤' },
  { href: '/admin/palette', labelKey: 'theme', icon: '◐' },
] as const

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Admin')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetch('/api/auth')
        const data = await res.json()
        if (!mounted) return
        if (!data.authenticated) {
          router.push('/login')
        } else {
          setIsAuthenticated(true)
        }
      } catch {
        if (mounted) {
          router.push('/login')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    })()

    return () => {
      mounted = false
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{t('loading')}</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-[var(--secondary)] text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {sidebarOpen && (
            <Link href="/admin" className="text-lg font-semibold">
              {t('cmsTitle')}
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-white/10 rounded"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition ${
                  isActive ? 'bg-white/20 border-r-4 border-[var(--primary)]' : ''
                }`}
                title={!sidebarOpen ? t(item.labelKey) : undefined}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && <span>{t(item.labelKey)}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          {sidebarOpen && (
            <div className="flex flex-col gap-2 mb-4">
              <Link
                href="/"
                className="text-sm text-center py-2 bg-white/10 hover:bg-white/20 rounded transition"
              >
                {t('viewSite')}
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-center py-2 bg-red-500/80 hover:bg-red-600 rounded transition"
              >
                {t('logout')}
              </button>
            </div>
          )}
          {!sidebarOpen && (
            <button
              onClick={handleLogout}
              className="w-full p-2 text-center hover:bg-white/10 rounded"
              title={t('logout')}
            >
              ⏻
            </button>
          )}
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
