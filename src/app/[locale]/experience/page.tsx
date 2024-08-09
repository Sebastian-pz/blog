import { getPostsByType } from '@/utilities/const'
import { PostTypes } from '@/utilities/interfaces'
import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { useLocale, useTranslations } from 'next-intl'

export default function Page() {
  const localeActive = useLocale()
  const t = useTranslations('filteredPostsExperience')

  const posts = getPostsByType(localeActive, PostTypes.experience)

  return (
    <FilteredPosts
      posts={posts}
      title={t('title')}
      description={t('description')}
    />
  )
}
