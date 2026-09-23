import Image from 'next/image'

interface MediaComponentProps {
  mediaType: 'image' | 'video'
  media: string
  label: string
}

export default function MediaComponent({ media, mediaType, label }: MediaComponentProps) {
  if (mediaType === 'image') {
    return (
      <figure className="m-auto mb-6">
        <Image
          src={media}
          alt={label}
          className="w-full border-3 border-ink object-cover shadow-nb"
          width={1200}
          height={675}
        />
      </figure>
    )
  }

  return (
    <figure className="m-auto mb-6">
      <iframe
        src={media}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="mx-auto block aspect-video w-full border-3 border-ink"
      />
    </figure>
  )
}
