import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { getPostsByType } from '@/utilities/const'
import { PostTypes } from '@/utilities/interfaces'
import { useLocale, useTranslations } from 'next-intl'

export default function Page() {
  const localeActive = useLocale()
  const t = useTranslations('filteredPostsOpinion')

  const posts = getPostsByType(localeActive, PostTypes.opinion)

  return (
    <FilteredPosts
      posts={posts}
      title={t('title')}
      description={t('description')}
    />
  )
}
