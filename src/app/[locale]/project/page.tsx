import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { getPostsByType } from '@/utilities/const'
import { PostTypes } from '@/utilities/interfaces'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Project posts',
  description:
    'Explore my diverse portfolio of projects, where I combine creativity and code to build innovative solutions. From intelligent bots to robust backends and elegant interfaces, discover how I can take your ideas to the next level with technologies like TypeScript, React, Node.js, and more.',
  keywords: [
    'Sebastian Perez',
    'Software developer',
    'Git',
    'Repositories',
    'TypeScript',
    'JavaScript',
    'NodeJS',
    'React',
    'NextJS',
    'Python',
    'Fullstack',
  ],
}

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
