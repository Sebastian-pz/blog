import Link from 'next/link'
import './global.css'

import { useLocale, useTranslations } from 'next-intl'

export default function NotFound() {

  const t = useTranslations('not-found');  
  const locale = useLocale();
  
  return (
    <html>
      <body className="notFound">
        <section className="notFound__content">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          <Link className="" href={`/${locale}`}>
            {t('callToAction')}
          </Link>
        </section>
      </body>
    </html>
  )
}
