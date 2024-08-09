import ExperienceCard from '@/components/Card/ExperienceCard'
import getExperience from '@/app/utils/locale/getExperiences'
import { useLocale, useTranslations } from 'next-intl'

export default function Experiences() {
  const localeActive = useLocale()
  const t = useTranslations('aboutExperience')

  const experiences = getExperience(localeActive)

  return (
    <section className="mt-8 p-2">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
        {t('title')}
      </h2>

      <section className="flex flex-col w-full justify-center items-center md:px-4 lg:px-10">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              responsibilities={experience.responsibilities}
              title={experience.title}
              description={experience.description}
              dates={experience.dates}
              link={experience.link}
              key={index}
            />
          )
        })}
      </section>
    </section>
  )
}
