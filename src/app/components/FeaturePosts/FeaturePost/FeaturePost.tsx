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
  return (
    <Link
      href={`/${localeActive}/post/${id}`}
      className="flex  lg:flex-row items-start gap-4 hover:underline"
      prefetch={false}
    >
      <Image
        src={image.src}
        alt="Blog post cover image"
        width={80}
        height={80}
        className="h-20 w-20 rounded-lg object-cover"
      />
      <div>
        <h3 className="text- font-bold">{title}</h3>
        <p className="text-muted-foreground">{date}</p>
      </div>
    </Link>
  )
}
