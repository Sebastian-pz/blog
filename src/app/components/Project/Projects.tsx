import ProjectCard from '@/components/ProjectCard/ProjectCard'
import PROJECTS from '@/utilities/ProjectsConstants'
import { useTranslations } from 'next-intl'

import Link from 'next/link'

export default function Projects() {
  const t = useTranslations('aboutProjects')

  return (
    <section className="my-8 p-2">
      <section className="flex justify-center items-center flex-col">
        <h2 className="text-center text-2xl font-bold">{t('title')}</h2>
        <p className="text-sm text-slate-500 text-center text-balanced">
          {t('label')}
        </p>
        <Link
          className="text-center"
          href="https://github.com/Sebastian-pz"
          target="_blank"
        >
          {t('callToAction')}
        </Link>
      </section>
      <div className="flex flex-wrap w-full justify-center items-center md:px-4 lg:px-10">
        {PROJECTS.map((project, index) => {
          return <ProjectCard project={project} key={index} />
        })}
      </div>
    </section>
  )
}
