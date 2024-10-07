import { useLocale } from 'next-intl'

import { getPostById } from '@/utilities/const'
import MediaComponent from '@/components/Media/MediaComponent'
import DescriptionLoader from './DescriptionLoader'
import { ResolvingMetadata } from 'next'

interface paramsInterface {
  params: {
    id: string
  }
}

const defaultLanguage = 'en'
export async function generateMetadata(
  { params }: paramsInterface,
  parent: ResolvingMetadata
) {
  const id = params.id
  const descriptionMaxLength = 150
  const post = getPostById(defaultLanguage, id)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: post.title,
    description: post.description[0].slice(0, descriptionMaxLength),
    openGraph: {
      images: [post.image, ...previousImages],
    },
  }
}

export default function Page({ params }: paramsInterface) {
  const activeLocale = useLocale()
  const post = getPostById(activeLocale, params.id)

  if (post) {
    return (
      <div className="m-auto w-3/4 sm:w-3/5 lg:w-2/5">
        <h1 className="text-3xl font-bold mb-3 mt-6">{post.title}</h1>
        <p className="text text-gray-900">{post.author}</p>
        <p className="text-sm text-gray-900">
          Created on:{' '}
          <time itemProp="datePublished" dateTime={post.creationDate}>
            {post.creationDate}
          </time>
        </p>

        <MediaComponent
          mediaType={post.mediaType}
          media={post.media ? post.media : post.image}
          introductionParagraph={post.description[0]}
        />
        <section className="leading-9">
          {post.description.map((text, index) => {
            return <DescriptionLoader paragraph={text.toString()} key={index} />
          })}
        </section>
      </div>
    )
  }

  return <div>Loading post</div>
}
