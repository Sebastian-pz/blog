import { getPostsByType } from '@/app/utils/const'
import FeaturePost from './FeaturePost/FeaturePost'
import { PostTypes } from '@/app/utils/interfaces'
import { useLocale, useTranslations } from 'next-intl'

export default function FeaturePosts() {
  const t = useTranslations('featurePosts')
  const localeActive = useLocale()
  const posts = getPostsByType(localeActive, PostTypes.experience).slice(0, 2)

  return (
    <section aria-labelledby="featured-posts" className="nb-frame bg-ice p-5">
      <h2 id="featured-posts" className="font-display text-2xl font-extrabold uppercase">
        {t('title')}
      </h2>
      <ul className="mt-4 list-none space-y-4 p-0">
        {posts.map(({ creationDate, title, image, id }) => {
          return (
            <li key={id}>
              <FeaturePost
                id={id as string}
                date={creationDate}
                image={image}
                title={title}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
