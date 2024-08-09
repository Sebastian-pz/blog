import Image from 'next/image'
import styles from './MediaComponent.module.css'

interface MediaComponentProps {
  mediaType: string
  media: string | any
  introductionParagraph: String
}

export default function MediaComponent(props: MediaComponentProps) {
  const { media, mediaType, introductionParagraph } = props

  if (mediaType === 'image') {
    return (
      <Image
        src={media.src}
        alt={`post image about ${introductionParagraph}`}
        className="m-auto mb-6 w-[90%] lg:w-3/5"
        width={600}
        height={600}
      />
    )
  }

  if (mediaType === 'video') {
    return (
      <iframe
        src={`${media}?si=APryLtmB175bPINH`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className={`m-auto mb-6 ${styles.MediaComponent__video}`}
        allowFullScreen={false}
      />
    )
  }
}
