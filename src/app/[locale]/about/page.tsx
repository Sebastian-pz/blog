import { Metadata } from 'next'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Svg from '@/components/svg/Svg'
import Projects from '@/components/Project/Projects'
import Experiences from '@/components/Experience/Experiences'
import ExtendedInfo from '@/components/ExtendedInfo/ExtendedInfo'

import profileImage from '@/public/profileImage.webp'
import GitHubIcon from '@/public/svg/github.svg'
import LinkedInIcon from '@/public/svg/linkedin.svg'

export const metadata: Metadata = {
  title: 'About',
  description:
    'In this section I talk a little about myself Sebastian Perez Software developer, who I am, where I studied, what I worked on and many other things.',
  keywords: [
    'Sebastian Perez',
    'Software developer',
    'About me',
    'Portfolio',
    'Python',
    'TypeScript',
    'Docker',
    'Unit Testing',
    'Git',
    'programming',
    'professional',
    'freelance',
    'open source',
    'blog',
  ],
}

export default function MainPage() {
  const t = useTranslations('about')

  return (
    <div className="nb-page max-w-5xl">
      <header className="nb-frame mb-8 flex flex-col items-center justify-between gap-8 bg-paper p-6 md:flex-row md:p-8">
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src={profileImage.src}
            alt={t('portraitAlt')}
            width="500"
            height="500"
            className="h-[110px] w-[110px] border-3 border-ink object-cover shadow-nb sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px]"
          />
          <div>
            <h1 className="nb-stamp mb-3 rotate-[-6deg] bg-lime px-3 py-2 text-xl md:text-3xl">
              Sebastian Pérez
            </h1>
            <p className="sr-only font-mono text-sm uppercase md:not-sr-only">{t('role')}</p>
            <address className="mt-1 font-mono text-sm not-italic">
              <a href="mailto:spezuluaga@gmail.com" className="underline underline-offset-4">
                spezuluaga@gmail.com
              </a>
            </address>
          </div>
        </div>
        <nav aria-label={t('profiles')}>
          <ul className="flex list-none items-center justify-center p-0">
            <li>
              <Svg
                label="LinkedIn"
                link="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
                svg={LinkedInIcon}
              />
            </li>
            <li>
              <Svg label="GitHub" link="https://github.com/Sebastian-pz" svg={GitHubIcon} />
            </li>
          </ul>
        </nav>
      </header>

      <hr className="mb-9 h-0 border-0 border-b-3 border-ink" />
      <ExtendedInfo />
      <Experiences />
      <Projects />
    </div>
  )
}
