import ProjectCard from '@/components/ProjectCard/ProjectCard'
import PROJECTS from '@/utilities/ProjectsConstants'
import { useTranslations } from 'next-intl'

import Link from 'next/link'

export default function Projects() {
  const t = useTranslations('aboutProjects')

  return (
    <section className="my-10">
      <section className="mb-8 flex flex-col items-center">
        <h2 className="text-center font-display text-2xl font-extrabold uppercase md:text-4xl">{t('title')}</h2>
        <p className="mt-2 max-w-xl text-center text-sm text-muted">
          {t('label')}
        </p>
        <Link
          className="mt-3 border-3 border-ink bg-blaze px-4 py-2 font-display text-sm font-extrabold uppercase shadow-nb-sm nb-press"
          href="https://github.com/Sebastian-pz"
          target="_blank"
        >
          {t('callToAction')}
        </Link>
      </section>
      <div className="flex w-full flex-wrap items-stretch justify-center gap-4">
        {PROJECTS.map((project, index) => {
          return <ProjectCard project={project} key={index} />
        })}
      </div>
    </section>
  )
}
