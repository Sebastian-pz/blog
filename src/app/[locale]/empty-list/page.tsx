import { useTranslations } from 'next-intl'

import Tags from '@/app/components/Tags/Tags'

export default function Page() {
  const t = useTranslations('emptyPosts')

  return (
    <div className="nb-page flex min-h-[60vh] flex-col items-center justify-center">
      <article className="nb-frame w-full max-w-2xl bg-hot p-8 text-center">
        <h1 className="font-display text-3xl font-extrabold uppercase md:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base md:text-lg">{t('description')}</p>
        <div className="mx-auto mt-10 max-w-xl">
          <Tags />
        </div>
      </article>
    </div>
  )
}
