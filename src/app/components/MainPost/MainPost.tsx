import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

import { postInterface } from '@/app/utils/interfaces'

interface propsComponent {
  post: postInterface
}

export default function MainPost({ post: mainPost }: propsComponent) {
  const localeActive = useLocale()

  return (
    <div className="nb-frame mb-8 bg-paper p-5 text-center">
      <h2 className="mb-4 font-display text-3xl font-extrabold uppercase">
        <Link href={`/${localeActive}/post/${mainPost.id}`}>
          {mainPost.title}
        </Link>
      </h2>
      <Image
        src={mainPost.image.src}
        alt={`image about ${mainPost.title}`}
        className="mx-auto mb-4 w-2/3 min-h-[220px] border-3 border-ink object-cover shadow-nb"
        width={600}
        height={600}
      />
      <p>{mainPost.description[0]}</p>
    </div>
  )
}
