import Image from 'next/image'
import { useTranslations } from 'next-intl'

import linkedinSVG from '@/public/svg/linkedin.svg'
import githubSVG from '@/public/svg/github.svg'
import gmailSVG from '@/public/svg/gmail.svg'

const socialLinkClass =
  'inline-flex size-11 shrink-0 items-center justify-center border-3 border-paper nb-press-on-ink'

export default function FooterComponent() {
  const t = useTranslations('footer')
  const tA11y = useTranslations('a11y')
  const newTab = tA11y('opensInNewTab')

  return (
    <footer className="mt-10 border-t-3 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="font-mono text-xs uppercase tracking-wider">{t('copyright')}</p>
        <nav aria-label={t('social')}>
          <ul className="flex list-none items-center gap-3 p-0">
            <li>
              <a
                href="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('linkedin')} (${newTab})`}
                className={`${socialLinkClass} bg-sun`}
              >
                <Image
                  width={20}
                  height={20}
                  src={linkedinSVG.src}
                  alt=""
                  className="size-5 max-w-none"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sebastian-pz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('github')} (${newTab})`}
                className={`${socialLinkClass} bg-ice`}
              >
                <Image
                  width={20}
                  height={20}
                  src={githubSVG.src}
                  alt=""
                  className="size-5 max-w-none"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:spezuluaga@gmail.com"
                aria-label={t('email')}
                className={`${socialLinkClass} bg-hot`}
              >
                <Image
                  width={20}
                  height={20}
                  src={gmailSVG.src}
                  alt=""
                  className="size-5 max-w-none"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}