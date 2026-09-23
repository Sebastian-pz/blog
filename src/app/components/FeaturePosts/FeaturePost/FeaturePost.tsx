import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { formatPostDate } from '@/lib/dates'

interface FeaturePostProps {
  image: string
  title: string
  date: string
  slug: string
}

export default function FeaturePost({ date, image, title, slug }: FeaturePostProps) {
  const localeActive = useLocale()

  return (
    <Link
      href={`/${localeActive}/post/${slug}`}
      className="flex items-start gap-3"
      prefetch={false}
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="h-20 w-20 border-3 border-ink object-cover shadow-nb-sm"
      />
      <div>
        <h3 className="font-display text-sm font-extrabold leading-tight">{title}</h3>
        <p className="mt-1 font-mono text-xs uppercase text-muted">
          <time dateTime={date}>{formatPostDate(date, localeActive)}</time>
        </p>
      </div>
    </Link>
  )
}
