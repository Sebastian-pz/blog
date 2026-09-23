import type { Metadata } from 'next'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import Svg from '@/components/svg/Svg'
import Projects from '@/components/Project/Projects'
import Experiences from '@/components/Experience/Experiences'
import ExtendedInfo from '@/components/ExtendedInfo/ExtendedInfo'

import profileImage from '@/public/profileImage.webp'
import GitHubIcon from '@/public/svg/github.svg'
import LinkedInIcon from '@/public/svg/linkedin.svg'
import { pageMetadata } from '@/lib/metadata'

type Params = Promise<{ locale: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return pageMetadata({
    locale,
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    path: '/about',
  })
}

export default function MainPage() {
  const t = useTranslations('about')

  // const CV_ROUTE = t('cvRoute')

  return (
    <div className="nb-page max-w-5xl">
      <div className="nb-frame mb-8 flex flex-col items-center justify-between gap-8 bg-paper p-6 md:flex-row md:p-8">
        <div className="flex items-center gap-4 md:gap-6">
            <Image
              src={profileImage.src}
              alt={t('portraitAlt')}
              width="500"
              height="500"
              className="h-[110px] w-[110px] border-3 border-ink object-cover shadow-nb sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px]"
            />
            <section>
              <h1 className="nb-stamp mb-3 rotate-[-6deg] bg-lime px-3 py-2 text-xl md:text-3xl">
                Sebastian Pérez
              </h1>
              <p className="hidden font-mono text-sm uppercase md:block">{t('role')}</p>
              <p className="mt-1 font-mono text-sm">spezuluaga@gmail.com</p>
            </section>
        </div>
        <section className="flex justify-center items-center">
          <Svg
            label="LinkedIn"
            link="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
            svg={LinkedInIcon}
          />
          <Svg
            label="GitHub"
            link="https://github.com/Sebastian-pz"
            svg={GitHubIcon}
          />
          {/* 
          <a
            download="CV-SebastianPerez.pdf"
            href={CV_ROUTE}
            className="flex flex-col border-2 hover:font-bold border-black hover:bg-[#fbfd84] p-3 duration-500 mb-2 mx-3 bg-[#fcfdb9] hover:scale-110"
          >
            <Image
              src={DownloadIcon.src}
              alt="Icon for download CV"
              width="24"
              height="24"
              className="mx-auto"
            />
            {t('cv')}
          </a>
           */}
        </section>
      </div>

      <div className="mb-9 h-0 border-b-3 border-ink" />
      <ExtendedInfo />
      <Experiences />
      <Projects />
    </div>
  )
}
