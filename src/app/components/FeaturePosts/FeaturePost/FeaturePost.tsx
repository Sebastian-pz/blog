import { toDateTimeAttribute } from '@/app/utils/dates'
import { encodeTitle } from '@/app/utils/encodeTitle'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface propsComponent {
  image: any
  title: string
  date: string
  id: string
}

export default function FeaturePost({
  date,
  image,
  title,
  id,
}: propsComponent) {
  const localeActive = useLocale()
  const published = toDateTimeAttribute(date)

  return (
    <Link
      href={`/${localeActive}/post/${encodeTitle(title, localeActive)}`}
      className="flex items-start gap-3"
      prefetch={false}
    >
      <Image
        src={image.src}
        alt=""
        width={80}
        height={80}
        className="h-20 w-20 border-3 border-ink object-cover shadow-nb-sm"
      />
      <div>
        <h3 className="font-display text-sm font-extrabold leading-tight">{title}</h3>
        <p className="mt-1 font-mono text-xs uppercase text-muted">
          {published ? <time dateTime={published}>{date}</time> : date}
        </p>
      </div>
    </Link>
  )
}
