import { useLocale, useTranslations } from 'next-intl'

import {
  getFilteredPosts,
  PostQueryFilter,
  DEFAULT_POST_LIMIT,
} from '@/app/utils/const'
import Post from '@/components/Post/Post'
import Pagination from '@/components/Pagination/Pagination'

export default function Posts() {
  const t = useTranslations('a11y')
  const localeActive = useLocale()
  const defaultPage = 1

  const queryConfig: PostQueryFilter = {
    page: defaultPage,
  }
  const { posts, totalPosts } = getFilteredPosts(localeActive, queryConfig)
  const shouldRenderPagination = totalPosts > DEFAULT_POST_LIMIT

  return (
    <section aria-label={t('latestPosts')}>
      <ul className="grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 2xl:grid-cols-3">
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
          actualPage={defaultPage}
          pages={Math.ceil(totalPosts / DEFAULT_POST_LIMIT)}
          tag={null}
        />
      )}
    </section>
  )
}
