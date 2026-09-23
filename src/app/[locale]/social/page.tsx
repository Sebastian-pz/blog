import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import ExternalLink from '@/components/ExternalLink/ExternalLink'
import { buttonVariants } from '@/components/ui/button'

import { pageMetadata } from '@/lib/metadata'
import { socialMediaProfiles } from './utils/constants'

type Params = Promise<{ locale: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return pageMetadata({
    locale,
    title: t('socialTitle'),
    description: t('socialDescription'),
    path: '/social',
  })
}

export default function Page() {
  const t = useTranslations('social')

  const accents = ['bg-sun', 'bg-ice', 'bg-hot'] as const

  return (
    <div className="nb-page">
      <h1 className="mb-10 text-center font-display text-3xl font-extrabold uppercase md:text-5xl">
        {t('mainTitle')}
      </h1>
      <ul className="mb-14 flex list-none flex-wrap justify-center gap-6 p-0">
        {socialMediaProfiles.map((profile, index) => (
          <li key={profile.name}>
            <article
              className={`nb-frame flex h-56 w-56 flex-col items-center justify-center gap-3 p-4 text-ink ${accents[index % accents.length]}`}
            >
              <Image alt="" src={profile.icon} />
              <h2 className="font-display text-lg font-extrabold uppercase">{profile.name}</h2>
              <ExternalLink href={profile.url} className={buttonVariants()}>
                {t('follow')}
                <span className="sr-only"> {profile.name}</span>
              </ExternalLink>
            </article>
          </li>
        ))}
      </ul>
      <section aria-labelledby="social-thanks" className="nb-frame bg-paper p-6 lg:p-12">
        <h2 id="social-thanks" className="mb-4 font-display text-2xl font-extrabold uppercase">
          {t('title')}
        </h2>
        <p className="mb-4 leading-7">{t('introduction')}</p>
        <ul className="mb-4 list-disc space-y-3 pl-5">
          <li>{t('benefits.one')}</li>
          <li>{t('benefits.two')}</li>
          <li>{t('benefits.three')}</li>
          <li>{t('benefits.four')}</li>
        </ul>
        <p className="leading-7">{t('paragraph')}</p>
        <p className="mt-4 inline-block bg-sun px-2 py-1 font-bold">{t('end')}</p>
      </section>
    </div>
  )
}
