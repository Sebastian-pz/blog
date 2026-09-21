import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

import { postInterface } from '@/app/utils/interfaces'
import GoBack from '@/components/GoBack/GoBack'
import PostNavigation from '@/components/PostsNavigation/PostNavigation'

interface ComponentProps {
  title: string
  posts: Array<postInterface>
  description: string
}

export default function FilteredPosts({
  posts,
  title,
  description,
}: ComponentProps) {
  const localeActive = useLocale()
  return (
    <div className="nb-page max-w-4xl">
      <GoBack />
      <section className="nb-frame mb-8 bg-sun p-5 text-center md:p-8">
        <h1 className="mb-3 font-display text-2xl font-extrabold uppercase md:text-3xl">
          {title}
        </h1>
        <p className="text-sm md:text-base">{description}</p>
      </section>

      <PostNavigation />

      <div className="mt-8 flex flex-col gap-6">
      {posts.map((post, index) => {
        const [introductionParagraph] = post.description
        return (
          <article
            key={index}
            className="nb-frame nb-press flex flex-col gap-4 p-4 sm:flex-row"
          >
            <Image
              src={post.image.src}
              alt={`post image about ${introductionParagraph}`}
              className="h-40 w-full border-3 border-ink object-cover sm:h-36 sm:w-44"
              width={200}
              height={160}
            />
            <div>
              <h2 className="mb-2 font-display text-lg font-extrabold md:text-xl">
                <Link href={`/${localeActive}/post/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted md:text-base">
                {introductionParagraph}
              </p>
            </div>
          </article>
        )
      })}
      </div>
    </div>
  )
}
