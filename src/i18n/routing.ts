import { defineRouting } from 'next-intl/routing'
import { routingConstants } from './shared/config'

const { defaultLocale, locales, localePrefix } = routingConstants

export const routing = defineRouting({ locales, defaultLocale, localePrefix })
