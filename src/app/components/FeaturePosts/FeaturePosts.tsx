import { useLocale, useTranslations } from 'next-intl'

import { getPostsByType } from '@/lib/posts'
import FeaturePost from './FeaturePost/FeaturePost'

export default function FeaturePosts() {
  const t = useTranslations('featurePosts')
  const localeActive = useLocale()
  const posts = getPostsByType(localeActive, 'experience').slice(0, 2)

  return (
    <div className="nb-frame bg-ice p-5">
      <h2 className="font-display text-2xl font-extrabold uppercase">{t('title')}</h2>
      <ul className="mt-4 list-none space-y-4 p-0">
        {posts.map((post) => (
          <li key={post.id}>
            <FeaturePost slug={post.slug} date={post.date} image={post.image} title={post.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}
