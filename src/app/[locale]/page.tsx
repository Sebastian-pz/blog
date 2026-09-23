import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import HeaderSection from '@/components/HeaderSection/HeaderSection'
import PostsSection from '@/components/PostsSection/PostsSection'
import { pageMetadata } from '@/lib/metadata'

type Params = Promise<{ locale: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'meta' })
  const metadata = pageMetadata({
    locale,
    title: t('title'),
    description: t('description'),
    path: '',
  })
  return { ...metadata, title: { absolute: t('title') } }
}

export default function Home() {
  return (
    <div className="nb-page">
      <HeaderSection />
      <PostsSection />
    </div>
  )
}
