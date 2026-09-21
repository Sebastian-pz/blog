import { useLocale, useTranslations } from 'next-intl'
import PersonalizedLink from './PersonalizedLink'

export default function PostNavigation() {
  const t = useTranslations('postNavigation')
  const activeLocale = useLocale()

  return (
    <>
      <h2 className="mt-2 text-center font-display text-lg font-extrabold uppercase">{t('title')}</h2>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <PersonalizedLink
          href={`/${activeLocale}/experience`}
          label={t('experience')}
        />
        <PersonalizedLink
          href={`/${activeLocale}/project`}
          label={t('projects')}
        />
        <PersonalizedLink
          href={`/${activeLocale}/opinion`}
          label={t('opinion')}
        />
      </div>
    </>
  )
}
