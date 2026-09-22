import ExternalLink from '@/components/ExternalLink/ExternalLink'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import PROJECTS from '@/utilities/ProjectsConstants'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('aboutProjects')

  return (
    <section aria-labelledby="created-projects" className="my-10">
      <div className="mb-8 flex flex-col items-center">
        <h2
          id="created-projects"
          className="text-center font-display text-2xl font-extrabold uppercase md:text-4xl"
        >
          {t('title')}
        </h2>
        <p className="mt-2 max-w-xl text-center text-sm text-muted">{t('label')}</p>
        <ExternalLink
          className="mt-3 border-3 border-ink bg-blaze px-4 py-2 font-display text-sm font-extrabold uppercase shadow-nb-sm nb-press"
          href="https://github.com/Sebastian-pz"
        >
          {t('callToAction')}
          <span className="sr-only"> {t('onGitHub')}</span>
        </ExternalLink>
      </div>
      <ul className="flex w-full list-none flex-wrap items-stretch justify-center gap-4 p-0">
        {PROJECTS.map((project) => {
          return (
            <li
              key={project.title}
              className="m-2 flex h-[240px] w-4/5 max-w-[300px] xl:h-[300px] xl:w-[275px]"
            >
              <ProjectCard project={project} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
