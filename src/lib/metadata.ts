import type { Metadata } from 'next'

import type { Locale } from './post-types'
import { SITE_URL } from './site'

function localePath(locale: string, path: string): string {
  return path === '' ? `/${locale}` : `/${locale}${path}`
}

export function pageMetadata({
  locale,
  title,
  description,
  path,
  languages,
}: {
  locale: string
  title: string
  description: string
  path: string
  languages?: Record<string, string>
}): Metadata {
  const pathname = localePath(locale, path)
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${pathname}`,
      languages: languages ?? {
        en: localePath('en', path),
        es: localePath('es', path),
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${pathname}`,
      siteName: 'Sebastian Pérez',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
  }
}

export function articleLanguages(
  locale: Locale,
  slug: string,
  translated: { locale: Locale; slug: string } | null,
): Record<string, string> {
  const languages: Record<string, string> = {
    [locale]: localePath(locale, `/post/${slug}`),
  }
  if (translated) {
    languages[translated.locale] = localePath(translated.locale, `/post/${translated.slug}`)
  }
  return languages
}
