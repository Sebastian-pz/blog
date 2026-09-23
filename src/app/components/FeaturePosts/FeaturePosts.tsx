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
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <FeaturePost
            key={post.id}
            slug={post.slug}
            date={post.date}
            image={post.image}
            title={post.title}
          />
        ))}
      </div>
    </div>
  )
}
