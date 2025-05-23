import { getRequestConfig } from 'next-intl/server'
import { routingConstants } from '@/i18n/shared/config'
import { notFound } from 'next/navigation'

const { locales } = routingConstants

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale
  if (!locales.includes(locale as any)) notFound()
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
