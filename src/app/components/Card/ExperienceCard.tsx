import { ExperienceI } from '@/app/utils/locale/common'
import { resolveContentHref } from '@/app/utils/postHref'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

interface propsComponent {
  experience: ExperienceI
}

export default function ExperienceCard({ experience }: propsComponent) {
  const t = useTranslations('aboutExperience')
  const localeActive = useLocale()

  const { title, link, dates, description, responsibilities, stack } = experience
  const articleHref = resolveContentHref(localeActive, link)

  return (
    <article className="nb-frame mx-auto mb-8 w-full bg-paper p-5">
      <h3 className="mb-2 font-display text-xl font-extrabold">
        {articleHref ? (
          <Link href={articleHref}>
            {title}
            <span className="sr-only">, {t('relatedArticle')}</span>
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="font-mono text-xs uppercase text-muted">{dates}</p>
      <p className="mt-2 text-base">{description}</p>
      <h4 className="sr-only">{t('responsibilities')}</h4>
      <ul className="list-disc p-3">
        {responsibilities.map((responsibility) => {
          return (
            <li key={responsibility} className="mt-2 ml-3 text-sm">
              {responsibility}
            </li>
          )
        })}
      </ul>
      <p className="mt-3 inline-block bg-brand px-2 py-1 font-mono text-xs font-bold uppercase text-paper">
        <span className="sr-only">{t('technologies')}: </span>
        {stack}
      </p>
    </article>
  )
}
