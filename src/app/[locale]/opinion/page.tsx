import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { getPostsByType } from '@/utilities/const'
import { PostTypes } from '@/utilities/interfaces'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Opinion posts',
  description:
    'Stay up to date with the latest trends in software development and technology. In Opinion Posts, Sebastian Perez shares his vision on code, new tools, and the future of development - in a language everyone can understand!',
  keywords: [
    'Sebastian Perez',
    'Software developer',
    'Programming',
    'Skills',
    'Trending',
    'Opinion',
    'Blog',
    'Tech',
    'TypeScript',
    'JavaScript',
    'NodeJS',
    'React',
    'NextJS',
    'Python',
    'Git',
  ],
}

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
