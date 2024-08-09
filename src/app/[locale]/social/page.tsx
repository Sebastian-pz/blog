import Link from 'next/link'
import URLS from './Constants'
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('social')

  return (
    <section
      id="social"
      className="mx-auto w-full md:w-3/4 lg:w-1/2  p-4 text-center"
    >
      <h1 className="text-center text-2xl font-bold my-4">{t('title')}</h1>
      <p className="my-4">{t('paragraphOne')}</p>
      <p>{t('paragraphTwo')}</p>

      <h2 className="mt-12 text-xl font-bold text-center">
        {t('linksIntroduction')}
      </h2>

      <p className="text-center">
        LinkedIn{' '}
        <Link
          className="font-bold text-primary-color-500 hover:text-primary-color-700"
          href={URLS.GITHUB}
          target="_blank"
        >
          Sebastian Perez Zuluaga
        </Link>
      </p>

      <p className="text-center">
        Twitter (X){' '}
        <Link
          className="font-bold text-primary-color-500 hover:text-primary-color-700"
          href={URLS.GITHUB}
          target="_blank"
        >
          @Sebastiantfa
        </Link>
      </p>

      <p className="text-center">
        GitHub{' '}
        <Link
          className="font-bold text-primary-color-500 hover:text-primary-color-700"
          href={URLS.GITHUB}
          target="_blank"
        >
          Sebastian-pz
        </Link>
      </p>

      <h2 className="mt-12 text-xl font-bold text-center">
        {t('acknowledgementTitle')}
      </h2>
      <p className="text-center">{t('acknowledgement')}</p>

      <p className="font-bold my-12 text-center">{t('thanks')}</p>
    </section>
  )
}
