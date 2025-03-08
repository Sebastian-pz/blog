import Link from 'next/link'
import { POSIBLE_TAGS } from './constants'
import Image from 'next/image'

interface PropsComponent {
  tagType: POSIBLE_TAGS
  text: string
}

export default function SpecialTag({ tagType, text }: PropsComponent) {
  switch (tagType) {
    case POSIBLE_TAGS.subtitle:
      return <h2 className="font-semibold text-xl mb-7">{text}</h2>

    case POSIBLE_TAGS.linkIntroduction:
      return <p className="">{text}</p>

    case POSIBLE_TAGS.link:
      return (
        <Link
          href={encodeURI(text.toString())}
          target="_blank"
          className="text-primary-color-500 hover:text-primary-color-700 font-semibold"
        >
          {text}
        </Link>
      )

    case POSIBLE_TAGS.note:
      return <p className="leading-9 italic text-gray-600">{text}</p>

    case POSIBLE_TAGS.image:
      return (
        <div className="flex items-center justify-center max-w-2/3">
          <Image
            className="border border-[#75756d] w-full h-auto"
            src={text}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            width={1200}
            height={800}
            alt="Image inside post"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%'
            }}
          />
        </div>
      )

    default:
      return <p className="mb-7">{text}</p>
  }
}
