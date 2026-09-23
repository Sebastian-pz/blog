import { MetadataRoute } from 'next'

import { routing } from '@/i18n/routing'
import { getPostMetas, latestPostDate } from '@/lib/posts'
import { SITE_URL } from '@/lib/site'
import type { PostType } from '@/lib/post-types'

const sectionPaths: { path: string; type?: PostType }[] = [
  { path: '' },
  { path: '/about' },
  { path: '/social' },
  { path: '/experience', type: 'experience' },
  { path: '/opinion', type: 'opinion' },
  { path: '/project', type: 'project' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    sectionPaths.map(({ path, type }) => {
      const lastModified = latestPostDate(type)
      return {
        url: `${SITE_URL}/${locale}${path}`,
        ...(lastModified ? { lastModified } : {}),
      }
    }),
  )

  const posts: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    getPostMetas(locale).map((post) => ({
      url: `${SITE_URL}/${locale}/post/${post.slug}`,
      lastModified: post.date,
    })),
  )

  return [...pages, ...posts]
}
