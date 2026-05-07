import { redirect } from '@/i18n/navigation'
import { getActiveSections } from '@/lib/publicSite'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const sections = await getActiveSections()
  const aboutSection = sections.find((section) => section.category === 'about')
  if (aboutSection) {
    redirect({ href: '/sections/about', locale })
  }
  if (sections.length > 0) {
    redirect({ href: `/sections/${sections[0].category}`, locale })
  }
  redirect({ href: '/', locale })
}
