import { getPostByTitle } from '@/app/utils/const'
import MediaComponent from '@/components/Media/MediaComponent'
import DescriptionLoader from './DescriptionLoader'

type Params = Promise<{slug: string,
  locale: string,
  id: string
}>
type SearchParams = Promise<{[key: string]: string | string[] | undefined}>

const defaultLanguage = 'en'
export async function generateMetadata(props: {
  params: Params,
  searchParams: SearchParams
}) {

  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query
  
  const descriptionMaxLength = 150
  // const post = getPostById(defaultLanguage, searchParams.id as string)
  const post = getPostByTitle(defaultLanguage, searchParams.id as string)


  return {
    title: post.title,
    description: post.description[0].slice(0, descriptionMaxLength),
    slug,
    query
  }
}

export default async function Page(props: {
  params: Params,
  searchParams: SearchParams
}) {
  const params = await props.params
  const { locale, id } = params
  

  // const post = getPostById(locale, id)
  const post = getPostByTitle(locale, id)

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
