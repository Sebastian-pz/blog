import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import MediaComponent from '@/components/Media/MediaComponent'
import PostBody from '@/components/PostBody/PostBody'
import { routing } from '@/i18n/routing'
import { formatPostDate } from '@/lib/dates'
import { articleLanguages } from '@/lib/metadata'
import { getPost, getPostById, getPostMetas } from '@/lib/posts'
import type { Locale } from '@/lib/post-types'
import { SITE_URL } from '@/lib/site'

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

  const otherLocale: Locale = locale === 'es' ? 'en' : 'es'
  const translated = locale === 'en' || locale === 'es' ? getPostById(otherLocale, post.id) : null
  const canonical = `${SITE_URL}/${locale}/post/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
      languages: articleLanguages(post.locale, post.slug, translated),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      publishedTime: post.date,
      images: [post.image],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
    },
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
          <p className="font-mono text-sm uppercase">
            <span className="sr-only">{t('author')}: </span>
            {post.author}
          </p>
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
