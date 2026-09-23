import { useLocale, useTranslations } from 'next-intl'

import ExternalLink from '@/components/ExternalLink/ExternalLink'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { getProjects } from '@/utilities/ProjectsConstants'

export default function Projects() {
  const t = useTranslations('aboutProjects')
  const locale = useLocale()
  const projects = getProjects(locale)

  return (
    <section className="my-10">
      <section className="mb-8 flex flex-col items-center">
        <h2 className="text-center font-display text-2xl font-extrabold uppercase md:text-4xl">{t('title')}</h2>
        <p className="mt-2 max-w-xl text-center text-sm text-muted">
          {t('label')}
        </p>
        <ExternalLink
          href="https://github.com/Sebastian-pz"
          className="mt-3 border-3 border-ink bg-blaze px-4 py-2 font-display text-sm font-extrabold uppercase shadow-nb-sm nb-press"
        >
          {t('callToAction')}
        </ExternalLink>
      </section>
      <ul className="flex w-full list-none flex-wrap items-stretch justify-center gap-4 p-0">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
