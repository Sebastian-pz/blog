import Link from 'next/link'
import { useLocale } from 'next-intl'

import { ExperienceI } from '@/app/utils/locale/common'
import { getPostById } from '@/lib/posts'

interface propsComponent {
  experience: ExperienceI
}

export default function ExperienceCard({ experience }: propsComponent) {
  const localeActive = useLocale()

  const { title, link, dates, description, responsibilities, stack } = experience
  const postId = link.match(/^\/post\/([^/?#]+)$/)?.[1]
  const post = postId ? getPostById(localeActive, postId) : null
  const href = post ? `/${localeActive}/post/${post.slug}` : null

  return (
    <article className="nb-frame mx-auto mb-8 w-full bg-paper p-5">
      <div className="leading-normal">
          <h3 className="mb-2 font-display text-xl font-extrabold">
            {href ? <Link href={href}>{title}</Link> : title}
          </h3>
          <p className="font-mono text-xs uppercase text-muted">
            {dates}
          </p>
          <p className="mt-2 text-base">{description}</p>
          <ul className="list-disc p-3">
            {responsibilities.map((responsibility, i) => {
              return (
                <li key={i} className="mt-2 ml-3 text-sm">
                  {responsibility}
                </li>
              )
            })}
          </ul>
          <p className="mt-3 inline-block bg-brand px-2 py-1 font-mono text-xs font-bold uppercase text-paper">
            {stack}
          </p>
      </div>
    </article>
  )
}
