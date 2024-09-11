import { postInterface } from '@/app/utils/interfaces'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

interface propsComponent {
  post: postInterface
}

export default function Post({ post }: propsComponent) {
  const localeActive = useLocale()
  const { title, description, id, image } = post

  function summary(text: string, limit: number) {
    if (text.length > limit) return text.slice(0, limit) + '...'
    return text
  }

  return (
    <article className="group border bg-white border-primary-color-100 rounded-lg shadow-lg">
      <Link
        href={`/${localeActive}/post/${id}`}
        className="block h-48 overflow-hidden rounded-t-lg"
        prefetch={false}
      >
        <Image
          src={image}
          alt={`Post about ${title}`}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-2 mt-2">
        <h2 className="text-2xl font-bold px-2">
          <Link
            href={`/${localeActive}/post/${id}`}
            className="hover:underline"
            prefetch={false}
          >
            {summary(title, 60)}
          </Link>
        </h2>
        <p className="text-muted-foreground p-2">
          {summary(description[0] as string, 100)}
        </p>
      </div>
    </article>
  )
}
