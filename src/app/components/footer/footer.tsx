import Image from 'next/image'
import { useTranslations } from 'next-intl'

import linkedinSVG from '@/public/svg/linkedin.svg'
import githubSVG from '@/public/svg/github.svg'
import gmailSVG from '@/public/svg/gmail.svg'

export default function FooterComponent() {
  const t = useTranslations('footer');
  return (
    <footer className="p-2 flex flex-col w-auto justify-center items-center border-t border-primary-color-800 mt-4">
      <section className="flex justify-center items-center">
        <p>{t('copyright')}</p>
        <a
          href="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
          target="_blank"
          className="m-4 hover:bg-primary-color-400  p-2"
        >
          <Image
            width={24}
            height={24}
            src={linkedinSVG.src}
            alt="Sebastian Perez LinkedIn"
          />
        </a>
        <a
          href="https://github.com/Sebastian-pz"
          target="_blank"
          className="m-4 hover:bg-primary-color-400  p-2"
        >
          <Image
            width={24}
            height={24}
            src={githubSVG.src}
            alt="Sebastian Perez GitHub"
          />
        </a>
        <a href="mailto:spezuluaga@gmail.com" className="m-4 hover:bg-primary-color-400  p-2">
          <Image
            width={24}
            height={24}
            src={gmailSVG.src}
            alt="Sebastian Perez email icon"
          />
        </a>
      </section>
    </footer>
  )
}
