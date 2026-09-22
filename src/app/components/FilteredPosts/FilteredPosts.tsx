import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

import { postInterface } from '@/app/utils/interfaces'
import { postPath } from '@/app/utils/postHref'
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
      <header className="nb-frame mb-8 bg-sun p-5 text-center md:p-8">
        <h1 className="mb-3 font-display text-2xl font-extrabold uppercase md:text-3xl">
          {title}
        </h1>
        <p className="text-sm md:text-base">{description}</p>
      </header>

      <PostNavigation />

      <ul className="mt-8 flex list-none flex-col gap-6 p-0">
        {posts.map((post) => {
          const [introductionParagraph] = post.description
          return (
            <li key={post.id}>
              <article className="nb-frame nb-press relative flex flex-col gap-4 p-4 sm:flex-row">
                <Image
                  src={post.image.src}
                  alt=""
                  className="h-40 w-full border-3 border-ink object-cover sm:h-36 sm:w-44"
                  width={200}
                  height={160}
                />
                <div>
                  <h2 className="mb-2 font-display text-lg font-extrabold md:text-xl">
                    <Link
                      href={postPath(localeActive, post.title)}
                      className="after:absolute after:inset-0 after:z-10"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted md:text-base">{introductionParagraph}</p>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
