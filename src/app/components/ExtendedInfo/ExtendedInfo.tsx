import { useTranslations } from 'next-intl'

export default function ExtendedInfo() {
  const t = useTranslations('aboutExtendedInfo')

  return (
    <section className="p-3 md:px-5 lg:px-10">
      <p className="text-balance text-center">
        {t('introduction')}
        <strong className="text-primary-color-400">
          {t('experienceInYears') + ' '}
        </strong>
        {t('experienceComplement')}
        <strong className="text-primary-color-400">
          {' '}
          {t('englishLevel')}
        </strong>{' '}
        {t('englishStatus')}
      </p>
    </section>
  )
}
