import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import { isIsoDate } from './dates'
import { excerptFromMarkdown } from './excerpt'
import { findById, findBySlug } from './find-post'
import type { Locale, MediaType, Post, PostMeta, PostRef, PostType } from './post-types'

const CONTENT_DIR = path.join(process.cwd(), 'content')
const LOCALES: Locale[] = ['en', 'es']
const POST_TYPES = new Set<PostType>(['experience', 'opinion', 'project'])
const MEDIA_TYPES = new Set<MediaType>(['image', 'video'])

export const DEFAULT_POST_LIMIT = 9

let cache: Post[] | null = null

function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'es'
}

function requireString(value: unknown, file: string, field: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${file} is missing ${field}`)
  }
  return value
}

function loadLocale(locale: Locale): Post[] {
  const dir = path.join(CONTENT_DIR, locale)
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      const type = requireString(data.type, file, 'type')
      const mediaType = requireString(data.mediaType, file, 'mediaType')
      if (!POST_TYPES.has(type as PostType)) {
        throw new Error(`${file} has unknown type ${type}`)
      }
      if (!MEDIA_TYPES.has(mediaType as MediaType)) {
        throw new Error(`${file} has unknown mediaType ${mediaType}`)
      }
      if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== 'string')) {
        throw new Error(`${file} has invalid tags`)
      }

      const date = requireString(data.date, file, 'date')
      if (!isIsoDate(date)) throw new Error(`${file} date must be YYYY-MM-DD`)

      const body = content.trim()
      return {
        id: requireString(data.id, file, 'id'),
        slug: requireString(data.slug, file, 'slug'),
        locale,
        type: type as PostType,
        title: requireString(data.title, file, 'title'),
        excerpt: excerptFromMarkdown(body),
        image: requireString(data.image, file, 'image'),
        mediaType: mediaType as MediaType,
        media: typeof data.media === 'string' ? data.media : undefined,
        author: requireString(data.author, file, 'author'),
        date,
        tags: data.tags as string[],
        body,
      }
    })
}

function allPosts(): Post[] {
  if (cache && process.env.NODE_ENV === 'production') return cache
  const posts = LOCALES.flatMap(loadLocale)
  posts.sort((left, right) => {
    if (left.date !== right.date) return left.date < right.date ? 1 : -1
    return left.slug.localeCompare(right.slug)
  })
  cache = posts
  return posts
}

function postsFor(locale: string): Post[] {
  if (!isLocale(locale)) return []
  return allPosts().filter((post) => post.locale === locale)
}

function toMeta(post: Post): PostMeta {
  return {
    id: post.id,
    slug: post.slug,
    locale: post.locale,
    type: post.type,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    mediaType: post.mediaType,
    media: post.media,
    author: post.author,
    date: post.date,
    tags: post.tags,
  }
}

export function getPostMetas(locale: string): PostMeta[] {
  return postsFor(locale).map(toMeta)
}

export function getPost(locale: string, slug: string): Post | null {
  return findBySlug(postsFor(locale), slug)
}

export function getPostById(locale: string, id: string): PostMeta | null {
  const post = findById(postsFor(locale), id)
  return post ? toMeta(post) : null
}

export function getPostsByType(locale: string, type: PostType): PostMeta[] {
  return getPostMetas(locale).filter((post) => post.type === type)
}

export function getFilteredPosts(
  locale: string,
  query: { page: number; tag?: string | null },
): { totalPosts: number; posts: PostMeta[] } {
  let page = query.page
  if (!Number.isFinite(page) || page < 1) page = 1

  let posts = getPostMetas(locale)
  if (query.tag) {
    posts = posts.filter((post) => post.tags.includes(query.tag as string))
  }

  return {
    totalPosts: posts.length,
    posts: posts.slice((page - 1) * DEFAULT_POST_LIMIT, page * DEFAULT_POST_LIMIT),
  }
}

export function getPostRefs(): PostRef[] {
  return allPosts().map(({ id, slug, locale }) => ({ id, slug, locale }))
}

export function latestPostDate(type?: PostType): string | undefined {
  const posts = type ? allPosts().filter((post) => post.type === type) : allPosts()
  return posts[0]?.date
}
