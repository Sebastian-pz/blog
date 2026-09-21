'use client'

import { useLocale } from 'next-intl'
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
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localeActive = useLocale() as SupportedLocale
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const queryParams: QueryParams = {
    page: searchParams.get('page'),
    tag: searchParams.get('tag')
  }

  const getTargetLocale = (currentLocale: SupportedLocale): SupportedLocale => {
    return currentLocale === 'en' ? 'es' : 'en'
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
    const targetLocale = getTargetLocale(localeActive)
    const newRoute = handlePostLocaleSwitch(pathname, localeActive, targetLocale)
    const finalUrl = buildFinalUrl(newRoute, queryParams)
    
    startTransition(() => {
      router.replace(finalUrl, { locale: targetLocale })
    })
  }

  return (
    <div className="border-3 border-ink bg-ice shadow-nb-sm">
      <label htmlFor="language-selector" className="sr-only">
        Change Language
      </label>
      <select
        defaultValue={localeActive}
        name="language-selector"
        id="language-selector"
        className="bg-transparent px-2 py-1.5 font-mono text-xs font-bold uppercase outline-hidden md:text-sm"
        onChange={handleLanguageChange}
        disabled={isPending}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  )
}