export interface LocalePostRef {
  id: string
  slug: string
  locale: string
}

/** Null means this article has no translation, so the locale stays. */
export function postPathForLocale(
  pathname: string,
  currentLocale: string,
  targetLocale: string,
  postRefs: LocalePostRef[],
): string | null {
  const match = pathname.match(/^\/post\/(.+)$/)
  if (!match) return pathname

  const requestedSlug = decodeURIComponent(match[1])
  const currentPost = postRefs.find(
    (post) => post.locale === currentLocale && post.slug === requestedSlug,
  )
  if (!currentPost) return null

  const translated = postRefs.find(
    (post) => post.locale === targetLocale && post.id === currentPost.id,
  )
  if (!translated) return null
  return `/post/${translated.slug}`
}

export function buildLocaleQuery(
  path: string,
  page: string | null,
  tag: string | null,
): string {
  const search = new URLSearchParams()
  if (page) search.set('page', page)
  if (tag) search.set('tag', tag)
  const query = search.toString()
  return query ? `${path}?${query}` : path
}
