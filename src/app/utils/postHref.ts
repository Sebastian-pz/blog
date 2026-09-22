import { getPostById } from './const'
import { encodeTitle } from './encodeTitle'

export function postPath(locale: string, title: string): string {
  return `/${locale}/post/${encodeTitle(title, locale)}`
}

/**
 * Experience entries store `/post/<id>`, but the route matches a title slug.
 * Returns null when the value is not a navigable href.
 */
export function resolveContentHref(locale: string, href: string): string | null {
  if (!href || href === '/') return null

  const postId = href.match(/^\/post\/([^/?#]+)$/)
  if (!postId) return null

  const post = getPostById(locale, postId[1])
  if (post.id !== postId[1]) return null

  return postPath(locale, post.title)
}
