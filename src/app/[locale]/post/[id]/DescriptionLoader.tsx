import { POSIBLE_TAGS, SPECIAL_CHAR } from './constants'
import SpecialTag from './SpecialTag'

interface PropsComponent {
  paragraph: string
}

export default function DescriptionLoader({ paragraph }: PropsComponent) {
  const hasSpecialTag = paragraph[0] === SPECIAL_CHAR

  if (hasSpecialTag) {
    // eslint-disable-next-line no-unused-vars
    const [_, specialTag, text] = paragraph.split('|')
    return <SpecialTag tagType={specialTag as POSIBLE_TAGS} text={text} />
  }

  return <p className="mb-7">{paragraph}</p>
}
