import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

import { postInterface } from '@/app/utils/interfaces'
import { postPath } from '@/app/utils/postHref'

interface propsComponent {
  post: postInterface
}

export default function MainPost({ post: mainPost }: propsComponent) {
  const localeActive = useLocale()

  return (
    <article className="nb-frame mb-8 bg-paper p-5 text-center">
      <h2 className="mb-4 font-display text-3xl font-extrabold uppercase">
        <Link href={postPath(localeActive, mainPost.title)}>{mainPost.title}</Link>
      </h2>
      <Image
        src={mainPost.image.src}
        alt=""
        className="mx-auto mb-4 min-h-[220px] w-2/3 border-3 border-ink object-cover shadow-nb"
        width={600}
        height={600}
      />
      <p>{mainPost.description[0]}</p>
    </article>
  )
}
