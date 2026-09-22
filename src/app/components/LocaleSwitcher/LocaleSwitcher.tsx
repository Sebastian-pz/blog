'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'
import { getPostById, getPostByTitle } from '@/app/utils/const'
import { encodeTitle } from '@/app/utils/encodeTitle'
import { usePathname, useRouter } from '@/i18n/navigation'

type SupportedLocale = 'en' | 'es'

interface QueryParams {
  page: string | null
  tag: string | null
}

export default function LocaleSwitcher() {
  const t = useTranslations('a11y')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localeActive = useLocale() as SupportedLocale
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const queryParams: QueryParams = {
    page: searchParams.get('page'),
    tag: searchParams.get('tag')
  }

  const handlePostLocaleSwitch = (
    currentPath: string,
    currentLocale: SupportedLocale,
    targetLocale: SupportedLocale,
  ): string => {
    const match = currentPath.match(/^\/post\/(.+)$/)
    if (!match) return currentPath

    const currentPost = getPostByTitle(currentLocale, match[1])
    if (currentPost?.id) {
      try {
        const postInTargetLanguage = getPostById(targetLocale, currentPost.id)
        return `/post/${encodeTitle(postInTargetLanguage.title, targetLocale)}`
      } catch (error) {
        console.error('Error switching locale for post:', error)
        return currentPath
      }
    }

    return currentPath
  }

  /**
   * Builds the final URL with query parameters if needed
   */
  const buildFinalUrl = (baseUrl: string, params: QueryParams): string => {
    const { page, tag } = params
    if (page && tag) {
      return `${baseUrl}?page=${page}&tag=${tag}`
    }
    return baseUrl
  }

  /**
   * Handles the language selection change event
   */
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = e.target.value
    if (nextLocale !== 'en' && nextLocale !== 'es') return
    if (nextLocale === localeActive) return

    const newRoute = handlePostLocaleSwitch(pathname, localeActive, nextLocale)
    const finalUrl = buildFinalUrl(newRoute, queryParams)

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