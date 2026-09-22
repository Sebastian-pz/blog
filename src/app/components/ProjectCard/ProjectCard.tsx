import ExternalLink from '@/components/ExternalLink/ExternalLink'
import defaultProjectMini from '@/public/project/mini-defaultProject.webp'
import Image from 'next/image'

interface propsComponent {
  project: {
    title: string
    link: string
    description: string
    src?: string
  }
}

export default function ProjectCard({ project }: propsComponent) {
  const { title, description, link, src } = project
  const external = /^https?:\/\//.test(link)

  return (
    <article className="nb-frame nb-press flex h-full w-full flex-col overflow-hidden">
      <Image
        src={src || defaultProjectMini.src}
        alt=""
        className="h-1/2 w-full border-b-3 border-ink object-cover"
        loading="lazy"
        width="500"
        height="166"
      />
      <h3 className="px-3 pt-3 font-display text-lg font-extrabold">
        {external ? <ExternalLink href={link}>{title}</ExternalLink> : title}
      </h3>
      <p className="px-3 pb-3 text-sm text-muted">{description}</p>
    </article>
  )
}
