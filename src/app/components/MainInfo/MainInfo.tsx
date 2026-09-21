import { useTranslations } from 'next-intl'

export default function MainInfo() {
  const t = useTranslations('mainInfo')

  return (
    <section className="nb-frame bg-lime p-5">
      <h2 className="font-display text-xl font-extrabold uppercase">
        {t('title')}
      </h2>
      <p className="mt-3 text-sm leading-7">{t('description')}</p>
      <p className="mt-3 text-sm leading-7 font-bold">{t('callToAction')}</p>
    </section>
  )
}
