import Image from 'next/image'
import { useTranslations } from 'next-intl'

import linkedinSVG from '@/public/svg/linkedin.svg'
import githubSVG from '@/public/svg/github.svg'
import gmailSVG from '@/public/svg/gmail.svg'

export default function FooterComponent() {
  const t = useTranslations('footer')
  return (
    <footer className="mt-10 border-t-3 border-ink bg-ink text-paper">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="font-mono text-xs uppercase tracking-wider">{t('copyright')}</p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
            target="_blank"
            className="border-3 border-paper bg-sun p-2 nb-press shadow-nb-sm"
          >
            <Image
              width={20}
              height={20}
              src={linkedinSVG.src}
              alt="Sebastian Perez LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Sebastian-pz"
            target="_blank"
            className="border-3 border-paper bg-ice p-2 nb-press shadow-nb-sm"
          >
            <Image
              width={20}
              height={20}
              src={githubSVG.src}
              alt="Sebastian Perez GitHub"
            />
          </a>
          <a
            href="mailto:spezuluaga@gmail.com"
            className="border-3 border-paper bg-hot p-2 nb-press shadow-nb-sm"
          >
            <Image
              width={20}
              height={20}
              src={gmailSVG.src}
              alt="Sebastian Perez email icon"
            />
          </a>
        </div>
      </section>
    </footer>
  )
}