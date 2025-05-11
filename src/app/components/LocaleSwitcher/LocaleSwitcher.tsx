'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'
import { getPostById, getPostByTitle } from '@/app/utils/const'
import { encodeTitle } from '@/app/utils/encodeTitle'

// Define supported locales as a type for better type safety
type SupportedLocale = 'en' | 'es'

// Interface for query parameters
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

  // Extract query parameters
  const queryParams: QueryParams = {
    page: searchParams.get('page'),
    tag: searchParams.get('tag')
  }

  /**
   * Determines the target locale based on the current active locale
   */
  const getTargetLocale = (currentLocale: SupportedLocale): SupportedLocale => {
    return currentLocale === 'en' ? 'es' : 'en'
  }

  /**
   * Handles post-specific locale switching logic
   */
  const handlePostLocaleSwitch = (currentPath: string, currentLocale: SupportedLocale, targetLocale: SupportedLocale): string => {
    const postPathRegex = /^\/[a-z]{2}\/post\/(.+)$/
    const match = currentPath.match(postPathRegex)
    
    if (!match) return currentPath.replace(`/${currentLocale}`, `/${targetLocale}`)
    
    const currentPostTitle = match[1]
    const currentPost = getPostByTitle(currentLocale, currentPostTitle)
    
    // If we found the current post by its encoded title and it has an ID
    if (currentPost?.id) {
      try {
        const postInTargetLanguage = getPostById(targetLocale, currentPost.id)
        const encodedTitle = encodeTitle(postInTargetLanguage.title, targetLocale)
        return `/${targetLocale}/post/${encodedTitle}`
      } catch (error) {
        console.error('Error switching locale for post:', error)
        // Fallback to standard route replacement if there's an error
        return currentPath.replace(`/${currentLocale}`, `/${targetLocale}`)
      }
    }
    
    // Fallback to standard route replacement if post not found
    return currentPath.replace(`/${currentLocale}`, `/${targetLocale}`)
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
      router.replace(finalUrl)
    })
  }

  return (
    <div className="border-2 border-black shadow-[4.0px_4.0px_rgba(0,0,0)] bg-[#92caf5]">
      <label htmlFor="language-selector" className="sr-only">
        Change Language
      </label>
      <select
        defaultValue={localeActive}
        name="language-selector"
        id="language-selector"
        className="p-2 bg-transparent"
        onChange={handleLanguageChange}
        disabled={isPending}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}