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
      return <h2 className="mb-7 font-display text-xl font-extrabold uppercase">{text}</h2>

    case POSIBLE_TAGS.linkIntroduction:
      return <p className="">{text}</p>

    case POSIBLE_TAGS.link:
      return (
        <Link
          href={encodeURI(text.toString())}
          target="_blank"
          className="bg-sun px-1 font-bold underline underline-offset-4"
        >
          {text}
        </Link>
      )

    case POSIBLE_TAGS.note:
      return <p className="border-l-3 border-ink bg-ice px-3 py-2 italic">{text}</p>

    case POSIBLE_TAGS.image:
      return (
        <div className="flex items-center justify-center max-w-2/3">
          <Image
            className="h-auto w-full border-3 border-ink"
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
