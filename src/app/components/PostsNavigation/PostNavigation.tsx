'use client'

import { useLocale, useTranslations } from 'next-intl'

import { usePathname } from '@/i18n/navigation'

import PersonalizedLink from './PersonalizedLink'

export default function PostNavigation() {
  const t = useTranslations('postNavigation')
  const activeLocale = useLocale()
  const pathname = usePathname()

  return (
    <nav aria-labelledby="post-category-nav">
      <h2
        id="post-category-nav"
        className="mt-2 text-center font-display text-lg font-extrabold uppercase"
      >
        {t('title')}
      </h2>
      <ul className="mt-4 flex list-none flex-wrap justify-center gap-3 p-0">
        <li>
          <PersonalizedLink
            href={`/${activeLocale}/experience`}
            label={t('experience')}
            current={pathname === '/experience'}
          />
        </li>
        <li>
          <PersonalizedLink
            href={`/${activeLocale}/project`}
            label={t('projects')}
            current={pathname === '/project'}
          />
        </li>
        <li>
          <PersonalizedLink
            href={`/${activeLocale}/opinion`}
            label={t('opinion')}
            current={pathname === '/opinion'}
          />
        </li>
      </ul>
    </nav>
  )
}
