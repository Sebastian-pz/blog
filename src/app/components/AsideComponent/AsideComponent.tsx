import { useTranslations } from 'next-intl'

import Tags from '@/components/Tags/Tags'
import FeaturePosts from '@/components/FeaturePosts/FeaturePosts'

export default function AsideComponent() {
  const t = useTranslations('a11y')

  return (
    <aside aria-label={t('sidebar')} className="space-y-8">
      <Tags />
      <FeaturePosts />
    </aside>
  )
}
