import { useLocale } from 'next-intl'

import {
  getFilteredPosts,
  queryFilterI,
  DEFAULT_POST_LIMIT,
} from '@/app/utils/const'
import Post from '@/components/Post/Post'
import Pagination from '@/components/Pagination/Pagination'

export default function Posts() {
  const localeActive = useLocale()
  const defaultPage = 1

  const queryConfig: queryFilterI = {
    page: defaultPage,
  }
  const { posts, totalPosts } = getFilteredPosts(localeActive, queryConfig)
  const shouldRenderPagination = totalPosts > DEFAULT_POST_LIMIT

  return (
    <main>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => {
          return <Post post={post} key={i} />
        })}
      </div>
      {shouldRenderPagination && (
        <Pagination
          actualPage={defaultPage}
          pages={Math.ceil(totalPosts / DEFAULT_POST_LIMIT)}
          tag={null}
        />
      )}
    </main>
  )
}
