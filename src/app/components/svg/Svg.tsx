import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface PropsComponent {
  svg: any
  label: string
  link?: string
}

export default function Svg({ svg, label, link }: PropsComponent) {
  if (!link)
    return (
      <div className="flex flex-col">
        <Image
          src={svg.src}
          alt={`Icon for ${label}`}
          width="24"
          height="24"
          className="mx-auto"
        />
        {label}
      </div>
    )

  return (
    <Link
      href={link}
      target="_blank"
      className="mx-2 mb-2 flex flex-col border-3 border-ink bg-sun p-3 font-mono text-xs uppercase nb-press shadow-nb-sm"
    >
      <Image
        src={svg.src}
        alt={`Icon for ${label}`}
        width="24"
        height="24"
        className="mx-auto"
      />
      {label}
    </Link>
  )
}
