import { useTranslations } from 'next-intl'

export default function MainInfo() {
  const t = useTranslations('mainInfo')

  return (
    <section className="bg-primary-color-100 rounded-lg p-4">
      <h2 className="text-x text-primary-color-500 font-semibold">
        {t('title')}
      </h2>
      <p className="text-sm mb-2  mt-3 leading-7">{t('description')}</p>
      <p className="text-sm  mt-3 leading-7">{t('callToAction')}</p>
    </section>
  )
}
