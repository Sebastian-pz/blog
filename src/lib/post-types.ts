export type Locale = 'en' | 'es'

export type PostType = 'experience' | 'opinion' | 'project'

export type MediaType = 'image' | 'video'

export interface PostMeta {
  id: string
  slug: string
  locale: Locale
  type: PostType
  title: string
  excerpt: string
  image: string
  mediaType: MediaType
  media?: string
  author: string
  date: string
  tags: string[]
}

export interface Post extends PostMeta {
  body: string
}

export interface PostRef {
  id: string
  slug: string
  locale: Locale
}
