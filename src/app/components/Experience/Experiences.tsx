import ExperienceCard from '@/components/Card/ExperienceCard'
import getExperience from '@/app/utils/locale/getExperiences'
import { useLocale, useTranslations } from 'next-intl'

export default function Experiences() {
  const localeActive = useLocale()
  const t = useTranslations('aboutExperience')

  const experiences = getExperience(localeActive)

  return (
    <section aria-labelledby="professional-experience" className="mt-10">
      <h2
        id="professional-experience"
        className="mb-3 text-center font-display text-2xl font-extrabold uppercase md:text-4xl"
      >
        {t('title')}
      </h2>
      <p className="mb-10 text-center text-base md:text-lg">{t('note')}</p>

      <ul className="flex w-full list-none flex-col items-center p-0 md:px-4 lg:px-10">
        {experiences.map((experience) => {
          return (
            <li key={experience.title} className="w-full">
              <ExperienceCard experience={experience} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
