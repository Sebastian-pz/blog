import { postInterface } from '@/app/utils/interfaces'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { encodeTitle } from '@/app/utils/encodeTitle'

interface propsComponent {
  post: postInterface
}

export default function Post({ post }: propsComponent) {
  const localeActive = useLocale()
  const { title, description, image } = post

  function summary(text: string, limit: number) {
    if (text.length > limit) return text.slice(0, limit) + '...'
    return text
  }

  const linkUrl = `/${localeActive}/post/${encodeTitle(title, localeActive)}`

  return (
    <article className="nb-frame nb-press relative h-full overflow-hidden">
      <div className="h-48 overflow-hidden border-b-3 border-ink">
        <Image
          src={image}
          alt=""
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2 p-3">
        <h2 className="font-display text-xl font-extrabold leading-tight">
          <Link
            href={linkUrl}
            prefetch={false}
            className="after:absolute after:inset-0 after:z-10"
          >
            {summary(title, 60)}
          </Link>
        </h2>
        <p className="text-sm text-muted">{summary(description[0] as string, 100)}</p>
      </div>
    </article>
  )
}
