'use client'

import Post from '@/app/components/Post/Post'
import {
  getFilteredPosts,
  PostQueryFilter,
  DEFAULT_POST_LIMIT,
} from '@/app/utils/const'
import { useLocale, useTranslations } from 'next-intl'
import { redirect, useSearchParams } from 'next/navigation'
import Pagination from '@/app/components/Pagination/Pagination'

const searchParamsOptions = {
  tag: 'tag',
  page: 'page',
}

export default function Page() {
  const t = useTranslations('tagResults')
  const searchParams = useSearchParams()
  const activeLocale = useLocale()
  const rawPage = Number(searchParams.get(searchParamsOptions.page))
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1
  const tag = searchParams.get(searchParamsOptions.tag)

  const queryConfig: PostQueryFilter = {
    page,
    tag,
  }

  const { posts, totalPosts } = getFilteredPosts(activeLocale, queryConfig)
  const shouldRenderPagination = totalPosts > DEFAULT_POST_LIMIT

  if (totalPosts === 0 || !posts.length) redirect(`/${activeLocale}/empty-list`)

  return (
    <div className="nb-page">
      <header className="nb-frame mb-8 bg-sun p-5 text-center md:p-8">
        <h1 className="font-display text-2xl font-extrabold uppercase md:text-3xl">
          {tag ? t('title', { tag }) : t('titleAll')}
        </h1>
      </header>
      <ul className="grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <li key={post.id} className="min-w-0">
              <Post post={post} />
            </li>
          )
        })}
      </ul>
      {shouldRenderPagination && (
        <Pagination
          pages={Math.ceil(totalPosts / DEFAULT_POST_LIMIT)}
          actualPage={page}
          tag={tag}
        />
      )}
    </div>
  )
}
