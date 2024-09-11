import Tag from '@/app/components/Tags/Tag/Tag'

import { getTagValues } from '@/app/utils/Tags/Tags'
import { useLocale } from 'next-intl'

export default function Tags() {
  const localeActive = useLocale()

  const defaultTagsNumber = 7

  return (
    <div className="rounded-lg border border-primary-color-100 bg-muted p-6 bg-white">
      <h2 className="text-2xl font-bold">Popular Tags</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {getTagValues(defaultTagsNumber).map((tagValue, i) => {
          return (
            <Tag
              label={tagValue}
              link={`/${localeActive}/q?page=1&tag=${tagValue}`}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}
