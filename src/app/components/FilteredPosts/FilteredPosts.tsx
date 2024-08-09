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
    <>
      <GoBack />
      <section className="w-[90%] sm:w-[70%] lg:w-[50%] m-auto">
        <h1 className="text-center mt-2 mb-3 pl-2 pr-2 font-bold text-lg">
          {title}
        </h1>
        <p className="text-center mb-2 md:px-2">{description}</p>
      </section>

      <PostNavigation />

      {posts.map((post, index) => {
        const [introductionParagraph] = post.description
        return (
          <article
            key={index}
            className="home__post m-auto  pt-9 pb-9 flex w-[90%] sm:w-[70%] lg:w-[50%] border-b lg:text-xl border-border-color"
          >
            <div className="m-auto">
              <Image
                src={post.image.src}
                alt={`post image about ${introductionParagraph}`}
                className="home__post__image max-h-[200px] max-w-[200px] w-[30vw] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              />
            </div>
            <div className="home__post__info ml-4 ">
              <h2 className="mb-4 md:text-lg font-bold hover:text-primary-color-600">
                <Link className="" href={`/${localeActive}/post/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-slate-500 text-xs md:text-lg lg:text-lg">
                {introductionParagraph}
              </p>
            </div>
          </article>
        )
      })}
    </>
  )
}
