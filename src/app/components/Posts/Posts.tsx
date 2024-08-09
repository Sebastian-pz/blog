import { useLocale } from 'next-intl'

import { getPosts } from '@/app/utils/const'
import Post from '@/components/Post/Post'

export default function Posts() {
  const localeActive = useLocale()
  const posts = getPosts(localeActive)
  return (
    <main>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => {
          return <Post post={post} key={i} />
        })}
      </div>
    </main>
  )
}
