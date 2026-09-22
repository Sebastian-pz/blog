import Image from 'next/image'
import styles from './MediaComponent.module.css'

interface MediaComponentProps {
  mediaType: string
  media: string | { src: string }
  label: string
}

export default function MediaComponent({ media, mediaType, label }: MediaComponentProps) {
  if (mediaType === 'image' && typeof media !== 'string') {
    return (
      <figure className="m-auto mb-6">
        <Image
          src={media.src}
          alt={label}
          className="w-full border-3 border-ink object-cover shadow-nb"
          width={600}
          height={600}
        />
      </figure>
    )
  }

  if (mediaType === 'video' && typeof media === 'string') {
    return (
      <figure className="m-auto mb-6">
        <iframe
          src={media}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={`mx-auto block ${styles.MediaComponent__video}`}
        />
      </figure>
    )
  }

  return null
}
