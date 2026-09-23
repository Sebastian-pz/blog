import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import Pagination from '@/app/components/Pagination/Pagination'
import Post from '@/app/components/Post/Post'
import Tags from '@/app/components/Tags/Tags'
import { DEFAULT_POST_LIMIT, getFilteredPosts } from '@/lib/posts'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('archiveTitle'),
    description: t('archiveDescription'),
    robots: { index: false, follow: true },
  }
}

type Params = Promise<{ locale: string }>
type SearchParams = Promise<{ tag?: string; page?: string }>

export default async function Page(props: { params: Params; searchParams: SearchParams }) {
  const { locale } = await props.params
  const searchParams = await props.searchParams
  const t = await getTranslations({ locale, namespace: 'tagResults' })
  const empty = await getTranslations({ locale, namespace: 'emptyPosts' })
  const rawPage = Number(searchParams.page)
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1
  const tag = searchParams.tag ?? null
  const { posts, totalPosts } = getFilteredPosts(locale, { page, tag })

  if (totalPosts === 0) {
    return (
      <div className="nb-page flex min-h-[60vh] flex-col items-center justify-center">
        <article className="nb-frame w-full max-w-2xl bg-hot p-8 text-center">
          <h1 className="font-display text-3xl font-extrabold uppercase md:text-5xl">
            {empty('title')}
          </h1>
          <p className="mt-4 text-base md:text-lg">{empty('description')}</p>
          <div className="mx-auto mt-10 max-w-xl">
            <Tags />
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="nb-page">
      <header className="nb-frame mb-8 bg-sun p-5 text-center md:p-8">
        <h1 className="font-display text-2xl font-extrabold uppercase md:text-3xl">
          {tag ? t('title', { tag }) : t('titleAll')}
        </h1>
      </header>
      <ul className="grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id} className="min-w-0">
            <Post post={post} />
          </li>
        ))}
      </ul>
      {totalPosts > DEFAULT_POST_LIMIT && (
        <Pagination pages={Math.ceil(totalPosts / DEFAULT_POST_LIMIT)} actualPage={page} tag={tag} />
      )}
    </div>
  )
}
