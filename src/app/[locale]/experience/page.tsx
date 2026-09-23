import type { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { pageMetadata } from '@/lib/metadata'
import { getPostsByType } from '@/lib/posts'

type Params = Promise<{ locale: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return pageMetadata({
    locale,
    title: t('experienceTitle'),
    description: t('experienceDescription'),
    path: '/experience',
  })
}

export default function Page() {
  const localeActive = useLocale()
  const t = useTranslations('filteredPostsExperience')

  const posts = getPostsByType(localeActive, 'experience')

  return (
    <FilteredPosts
      posts={posts}
      title={t('title')}
      description={t('description')}
    />
  )
}
