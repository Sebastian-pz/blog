import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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
      <div className="mb-14 flex flex-wrap justify-center gap-6">
        {socialMediaProfiles.map((profile, index) => (
          <Card
            key={profile.name}
            className={`flex h-56 w-56 flex-col items-center justify-center p-4 ${accents[index % accents.length]}`}
          >
            <CardContent className="flex flex-col items-center gap-3 p-0">
              <Image alt={`profile ${profile.name} icon`} src={profile.icon} />
              <h2 className="font-display text-lg font-extrabold uppercase">{profile.name}</h2>
              <Link href={profile.url} target="_blank" passHref>
                <Button
                  aria-label={`Visit my ${profile.name} profile`}
                >
                  Follow
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <section className="nb-frame bg-paper p-6 lg:p-12">
        <h2 className="mb-4 font-display text-2xl font-extrabold uppercase">{t('title')}</h2>
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
