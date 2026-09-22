import { useTranslations } from 'next-intl'
import { POSIBLE_TAGS } from './constants'
import Image from 'next/image'

interface PropsComponent {
  tagType: POSIBLE_TAGS
  text: string
}

export default function SpecialTag({ tagType, text }: PropsComponent) {
  const t = useTranslations('post')
  const tA11y = useTranslations('a11y')

  switch (tagType) {
    case POSIBLE_TAGS.subtitle:
      return <h2 className="mb-7 font-display text-xl font-extrabold uppercase">{text}</h2>

    case POSIBLE_TAGS.linkIntroduction:
      return <p className="">{text}</p>

    case POSIBLE_TAGS.link: {
      const href = encodeURI(text.trim())
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sun px-1 font-bold underline underline-offset-4"
        >
          {text.trim()}
          <span className="sr-only"> ({tA11y('opensInNewTab')})</span>
        </a>
      )
    }

    case POSIBLE_TAGS.note:
      return <p className="border-l-3 border-ink bg-ice px-3 py-2 italic">{text}</p>

    case POSIBLE_TAGS.image:
      return (
        <figure className="flex max-w-2/3 items-center justify-center">
          <Image
            className="h-auto w-full border-3 border-ink"
            src={text}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            width={1200}
            height={800}
            alt={t('articleImage')}
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
            }}
          />
        </figure>
      )

    default:
      return <p className="mb-7">{text}</p>
  }
}
