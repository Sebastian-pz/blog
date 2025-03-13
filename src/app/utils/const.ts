import { PostTypes } from './interfaces'

import { posts as PostsInSpanish } from './locale/es/posts'
import { posts as PostsInEnglish } from './locale/en/posts'
import { encodeTitle } from './encodeTitle'

export const DEFAULT_POST_LIMIT = 9

export function getPosts(lang: string) {
  switch (lang) {
    case 'es':
      return PostsInSpanish
    case 'en':
      return PostsInEnglish
    default:
      return PostsInEnglish
  }
}

export interface queryFilterI {
  page: number
  tag?: string | null
}

export function getFilteredPosts(lang: string, query: queryFilterI) {
  let posts = getPosts(lang)
  let { tag, page = 1 } = query

  if (isNaN(page)) page = 1
  if (tag) posts = posts.filter((post) => tag && post.tags.includes(tag))
  const totalPosts = posts.length
  const postsThisPage = posts.slice(
    (page - 1) * DEFAULT_POST_LIMIT,
    page * DEFAULT_POST_LIMIT
  )

  return {
    totalPosts,
    posts: postsThisPage,
  }
}

export function getPostById(lang: string, id: string) {
  const posts = getPosts(lang)
  return posts.find((post) => post.id === id) || posts[0]
}

export function getPostByTitle(lang: string, title: string) {
  const posts = getPosts(lang)
  return (
    posts.find((post) => encodeTitle(post.title, lang) === title) || posts[0]
  )
}

export function getPostsByType(lang: string, type: PostTypes) {
  return getPosts(lang).filter((post) => post.type === type)
}

export function searchPosts(lang: string, search: string) {
  return getPosts(lang).filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )
}
