import { useTranslations } from 'next-intl'

export default function ExtendedInfo() {
  const t = useTranslations('aboutExtendedInfo')

  return (
    <div className="nb-frame bg-paper p-5 md:p-8">
      <p className="text-balance text-center text-base leading-7 md:text-lg">
        {t('introduction')}
        <strong className="bg-sun px-1">
          {t('experienceInYears') + ' '}
        </strong>
        {t('experienceComplement')}
        <strong className="bg-ice px-1">
          {' '}
          {t('englishLevel')}
        </strong>{' '}
        {t('englishStatus')}
      </p>
    </div>
  )
}
