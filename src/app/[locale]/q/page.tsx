'use client'

import Post from '@/app/components/Post/Post'
import {
  getFilteredPosts,
  queryFilterI,
  DEFAULT_POST_LIMIT,
} from '@/app/utils/const'
import { useLocale } from 'next-intl'
import { redirect, useSearchParams } from 'next/navigation'
import Pagination from '@/app/components/Pagination/Pagination'

const searchParamsOptions = {
  tag: 'tag',
  page: 'page',
}

export default function Page() {
  const searchParams = useSearchParams()
  const activeLocale = useLocale()
  const page = Number(searchParams.get(searchParamsOptions.page))
  const tag = searchParams.get(searchParamsOptions.tag)

  const queryConfig: queryFilterI = {
    page,
    tag,
  }

  const { posts, totalPosts } = getFilteredPosts(activeLocale, queryConfig)
  const shouldRenderPagination = totalPosts > DEFAULT_POST_LIMIT

  if (totalPosts === 0 || !posts.length) redirect(`/${activeLocale}/empty-list`)

  return (
    <main className="max-w-[1200px] m-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => {
          return <Post post={post} key={i} />
        })}
      </div>
      {shouldRenderPagination && (
        <Pagination
          pages={Math.ceil(totalPosts / DEFAULT_POST_LIMIT)}
          actualPage={page}
          tag={tag}
        />
      )}
    </main>
  )
}
