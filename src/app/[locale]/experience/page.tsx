import { getPostsByType } from '@/utilities/const'
import { PostTypes } from '@/utilities/interfaces'
import FilteredPosts from '@/components/FilteredPosts/FilteredPosts'
import { useLocale, useTranslations } from 'next-intl'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project posts',
  description:
    'Discover my journey as a full-stack developer, where I have transformed ideas into innovative web solutions. From creating dynamic web applications to diving into data analysis and automation with bots, I share my experience in agile methodologies, technical leadership, and open-source collaboration.',
  keywords: [
    'Sebastian Perez',
    'Software developer',
    'Proffesional experience',
    'Agile methodologies',
    'Technical leadership',
    'Open-source collaboration',
    'Web development',
    'Data analysis',
    'Automation',
    'Bots',
    'Full-stack development',
    'Git',
    'GitHub',
    'Repositories',
    'TypeScript',
    'JavaScript',
    'NodeJS',
    'React',
    'NextJS',
    'Python',
  ],
}

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
