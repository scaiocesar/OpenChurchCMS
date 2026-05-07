'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, useRouter } from '@/i18n/navigation'

export default function LoginPage() {
  const router = useRouter()
  const t = useTranslations('Login')
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        router.push('/admin')
      } else {
        setError(data.error || t('errorInvalid'))
      }
    } catch {
      setError(t('errorGeneric'))
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/images/logo-default.png"
            alt="St Henry Catholic Church"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-semibold text-[var(--secondary)]">{t('title')}</h1>
          <p className="text-gray-500 text-sm">{t('subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('username')}</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[var(--primary)] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('password')}</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[var(--primary)] outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--primary)] text-white py-2 rounded hover:bg-[#5ab0d4] transition disabled:opacity-50"
          >
            {loading ? t('loggingIn') : t('submit')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[var(--primary)] hover:underline">
            {t('backToSite')}
          </Link>
        </div>
      </div>
    </div>
  )
}
