import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'

import type { PostMeta } from '@/lib/post-types'

function summary(text: string, limit: number) {
  if (text.length <= limit) return text
  return `${text.slice(0, limit).trimEnd()}…`
}

export default function Post({ post }: { post: PostMeta }) {
  const localeActive = useLocale()
  const linkUrl = `/${localeActive}/post/${post.slug}`

  return (
    <article className="nb-frame nb-press group overflow-hidden">
      <Link
        href={linkUrl}
        className="block h-48 overflow-hidden border-b-3 border-ink"
        prefetch={false}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="space-y-2 p-3">
        <h2 className="font-display text-xl font-extrabold leading-tight">
          <Link href={linkUrl} prefetch={false}>
            {summary(post.title, 60)}
          </Link>
        </h2>
        <p className="text-sm text-muted">{summary(post.excerpt, 100)}</p>
      </div>
    </article>
  )
}
