import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { getPostsByType } from '@/utilities/const'
import { PostTypes } from '@/utilities/interfaces'
import { useLocale, useTranslations } from 'next-intl'

export default function Page() {
  const localeActive = useLocale()
  const posts = getPostsByType(localeActive, PostTypes.project)

  const t = useTranslations('filteredPostsProjects')

  return (
    <FilteredPosts
      posts={posts}
      title={t('title')}
      description={t('description')}
    />
  )
}
