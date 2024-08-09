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
      className="flex flex-col hover:font-bold border-2 border-black hover:bg-[#fbfd84] p-3 duration-500 mb-2 mx-3 bg-[#fcfdb9] hover:scale-110"
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
