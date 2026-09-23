import Image from 'next/image'

import ExternalLink from '@/components/ExternalLink/ExternalLink'
import defaultProjectMini from '@/public/project/mini-defaultProject.webp'

interface propsComponent {
  project: {
    title: string
    link: string
    description: string
    dates: string
    src?: string
  }
}

export default function ProjectCard({ project }: propsComponent) {
  const { title, description, link, dates, src } = project

  return (
    <article className="nb-frame nb-press m-2 flex h-[240px] w-4/5 max-w-[300px] flex-col overflow-hidden xl:h-[300px] xl:w-[275px]">
      <Image
        src={src || defaultProjectMini.src}
        alt=""
        className="h-1/2 w-full border-b-3 border-ink object-cover"
        loading="lazy"
        width="500"
        height="166"
      />
      <h3 className="px-3 pt-3 font-display text-lg font-extrabold">
        {link ? <ExternalLink href={link}>{title}</ExternalLink> : title}
      </h3>
      <p className="px-3 font-mono text-xs uppercase text-muted">{dates}</p>
      <p className="px-3 pb-3 text-sm text-muted">{description}</p>
    </article>
  )
}
