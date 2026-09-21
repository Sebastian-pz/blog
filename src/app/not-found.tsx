import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { fontDisplay, fontMono, fontSans } from '@/app/ui/fonts'
import './[locale]/globals.css'

export default function NotFound() {
  const t = useTranslations('not-found')
  const locale = useLocale()

  return (
    <html lang={locale}>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontSans.className} flex min-h-screen items-center justify-center bg-canvas text-ink`}
      >
        <section className="nb-frame mx-4 max-w-lg bg-hot p-8 text-center">
          <p className="nb-stamp mb-4 rotate-[-8deg] bg-sun px-3 py-1 text-xs">404</p>
          <h1 className="font-display text-4xl font-extrabold uppercase">{t('title')}</h1>
          <p className="mt-4 text-base">{t('description')}</p>
          <Link
            className="mt-6 inline-flex border-3 border-ink bg-sun px-5 py-3 font-display text-sm font-extrabold uppercase shadow-nb nb-press"
            href={`/${locale}`}
          >
            {t('callToAction')}
          </Link>
        </section>
      </body>
    </html>
  )
}
