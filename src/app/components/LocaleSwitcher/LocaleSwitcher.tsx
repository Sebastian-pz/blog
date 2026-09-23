'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

import { usePathname, useRouter } from '@/i18n/navigation'
import { buildLocaleQuery, postPathForLocale } from '@/lib/locale-switch'
import type { PostRef } from '@/lib/post-types'

type SupportedLocale = 'en' | 'es'

interface QueryParams {
  page: string | null
  tag: string | null
}

export default function LocaleSwitcher({ postRefs }: { postRefs: PostRef[] }) {
  const t = useTranslations('a11y')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localeActive = useLocale() as SupportedLocale
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const queryParams: QueryParams = {
    page: searchParams.get('page'),
    tag: searchParams.get('tag'),
  }

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = event.target.value
    if (nextLocale !== 'en' && nextLocale !== 'es') return
    if (nextLocale === localeActive) return

    const newRoute = postPathForLocale(pathname, localeActive, nextLocale, postRefs)
    if (newRoute === null) return

    const finalUrl = buildLocaleQuery(newRoute, queryParams.page, queryParams.tag)

    startTransition(() => {
      router.replace(finalUrl, { locale: nextLocale })
    })
  }

  return (
    <div className="border-3 border-ink bg-ice shadow-nb-sm">
      <label htmlFor="language-selector" className="sr-only">
        {t('changeLanguage')}
      </label>
      <select
        value={localeActive}
        name="language-selector"
        id="language-selector"
        className="bg-transparent px-2 py-1.5 font-mono text-xs font-bold uppercase md:text-sm"
        onChange={handleLanguageChange}
        disabled={isPending}
        aria-busy={isPending}
      >
        <option value="es" lang="es">
          ES
        </option>
        <option value="en" lang="en">
          EN
        </option>
      </select>
    </div>
  )
}
