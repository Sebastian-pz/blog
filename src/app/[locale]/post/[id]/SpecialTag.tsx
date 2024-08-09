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
      return <h2 className="font-semibold text-xl">{text}</h2>

    case POSIBLE_TAGS.link:
      return (
        <Link
          href={encodeURI(text.toString())}
          target="_blank"
          className="text-lime-700 hover:text-lime-600"
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
            className="border border-[#75756d] w-full"
            src={text}
            sizes="100vw"
            height={0}
            width={0}
            alt="Image inside post"
            loading="lazy"
          />
        </div>
      )

    default:
      return <p className="mb-7">{text}</p>
  }
}
