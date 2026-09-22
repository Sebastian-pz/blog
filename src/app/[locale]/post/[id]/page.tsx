import { getPosts } from '@/app/utils/const'
import { toDateTimeAttribute } from '@/app/utils/dates'
import { encodeTitle } from '@/app/utils/encodeTitle'
import MediaComponent from '@/components/Media/MediaComponent'
import { getTranslations } from 'next-intl/server'
import DescriptionLoader from './DescriptionLoader'

type Params = Promise<{
  locale: string
  id: string
}>

function findPost(locale: string, id: string) {
  return getPosts(locale).find((item) => encodeTitle(item.title, locale) === id)
}

export async function generateMetadata(props: { params: Params }) {
  const { locale, id } = await props.params
  const t = await getTranslations({ locale, namespace: 'post' })
  const post = findPost(locale, id)

  if (!post) {
    return { title: t('unavailable') }
  }

  return {
    title: post.title,
    description: post.description[0]?.toString().slice(0, 150) ?? '',
  }
}

export default async function Page(props: { params: Params }) {
  const params = await props.params
  const { locale, id } = params
  const t = await getTranslations({ locale, namespace: 'post' })
  const post = findPost(locale, id)

  if (post) {
    const published = toDateTimeAttribute(post.creationDate)
    const mediaLabel =
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
              <time itemProp="datePublished" {...(published ? { dateTime: published } : {})}>
                {post.creationDate}
              </time>
            </p>
          </header>

          <MediaComponent
            mediaType={post.mediaType}
            media={post.media ? post.media : post.image}
            label={mediaLabel}
          />
          <div className="leading-8">
            {post.description.map((text, index) => {
              return <DescriptionLoader paragraph={text.toString()} key={index} />
            })}
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="nb-page max-w-3xl">
      <h1 className="font-display text-3xl font-extrabold uppercase">{t('unavailable')}</h1>
    </div>
  )
}
