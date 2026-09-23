import { useLocale } from 'next-intl'

import Pagination from '@/components/Pagination/Pagination'
import Post from '@/components/Post/Post'
import { DEFAULT_POST_LIMIT, getFilteredPosts } from '@/lib/posts'

export default function Posts() {
  const localeActive = useLocale()
  const { posts, totalPosts } = getFilteredPosts(localeActive, { page: 1 })

  return (
    <main>
      <ul className="grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 2xl:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id} className="min-w-0">
            <Post post={post} />
          </li>
        ))}
      </ul>
      {totalPosts > DEFAULT_POST_LIMIT && (
        <Pagination
          actualPage={1}
          pages={Math.ceil(totalPosts / DEFAULT_POST_LIMIT)}
          tag={null}
        />
      )}
    </main>
  )
}
