import { useTranslations } from 'next-intl'

export default function HeaderSection() {
  const t = useTranslations('headerSection')

  return (
    <header className="mb-10 md:mb-14">
      <div className="relative">
        <span className="nb-stamp absolute -left-1 -top-3 rotate-[-8deg] bg-hot px-2 py-1 text-[10px] md:text-xs">
          DEV LOG
        </span>
        <div className="nb-frame bg-sun px-5 py-8 text-center md:px-10 md:py-12">
          <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-[40rem] text-base md:text-xl">
            {t('description')}
          </p>
        </div>
      </div>
    </header>
  )
}
