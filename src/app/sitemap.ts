import { MetadataRoute } from 'next'
import { posts } from './utils/locale/es/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sebastian-perez-dev.com/en',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.sebastian-perez-dev.com/es',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.sebastian-perez-dev.com/en/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.sebastian-perez-dev.com/es/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.sebastian-perez-dev.com/en/social',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://www.sebastian-perez-dev.com/es/social',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    ...getPostsPages('es'),
    ...getPostsPages('en'),
  ]
}

function getPostsPages(lang: string): MetadataRoute.Sitemap {
  return posts.map((post) => {
    return {
      url: `https://www.sebastian-perez-dev.com/${lang}/post/${post.id}`,
      lastModified: new Date(post.creationDate),
      changeFrequency: 'never',
      priority: 0.5,
    }
  })
}
