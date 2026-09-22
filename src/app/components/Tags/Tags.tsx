import Tag from '@/app/components/Tags/Tag/Tag'

import { getTagValues } from '@/app/utils/Tags/Tags'
import { useLocale, useTranslations } from 'next-intl'

export default function Tags() {
  const t = useTranslations('tags')
  const localeActive = useLocale()

  const defaultTagsNumber = 7

  return (
    <section aria-labelledby="popular-tags" className="nb-frame bg-paper p-5">
      <h2 id="popular-tags" className="font-display text-2xl font-extrabold uppercase">
        {t('title')}
      </h2>
      <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
        {getTagValues(defaultTagsNumber).map((tagValue) => {
          return (
            <li key={tagValue}>
              <Tag
                label={tagValue}
                link={`/${localeActive}/q?page=1&tag=${encodeURIComponent(tagValue)}`}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
