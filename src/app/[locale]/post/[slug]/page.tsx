import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import MediaComponent from '@/components/Media/MediaComponent'
import PostBody from '@/components/PostBody/PostBody'
import { formatPostDate } from '@/lib/dates'
import { getPost, getPostMetas } from '@/lib/posts'
import { routing } from '@/i18n/routing'

type Params = Promise<{
  locale: string
  slug: string
}>

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPostMetas(locale).map((post) => ({ locale, slug: post.slug })),
  )
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await props.params
  const t = await getTranslations({ locale, namespace: 'post' })
  const post = getPost(locale, slug)

  if (!post) {
    return {
      title: t('unavailable'),
      robots: { index: false, follow: false },
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function Page(props: { params: Params }) {
  const { locale, slug } = await props.params
  const t = await getTranslations({ locale, namespace: 'post' })
  const post = getPost(locale, slug)

  if (!post) notFound()

  const label =
    post.mediaType === 'video'
      ? t('videoTitle', { title: post.title })
      : t('cover', { title: post.title })

  return (
    <div className="nb-page max-w-3xl">
      <article className="nb-frame bg-paper p-5 md:p-8">
        <header>
          <h1 className="mb-3 font-display text-3xl font-extrabold uppercase md:text-4xl">
            {post.title}
          </h1>
          <p className="font-mono text-sm uppercase">{post.author}</p>
          <p className="mb-6 font-mono text-xs uppercase text-muted">
            {t('createdOn')}{' '}
            <time dateTime={post.date}>{formatPostDate(post.date, locale)}</time>
          </p>
        </header>
        <MediaComponent
          mediaType={post.mediaType}
          media={post.mediaType === 'video' && post.media ? post.media : post.image}
          label={label}
        />
        <PostBody source={post.body} />
      </article>
    </div>
  )
}
