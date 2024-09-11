import { ExperienceI } from '@/app/utils/locale/common'
import { useLocale } from 'next-intl'
import Link from 'next/link'

interface propsComponent {
  experience: ExperienceI
}

export default function ExperienceCard({ experience }: propsComponent) {
  const localeActive = useLocale()

  const { title, link, dates, description, responsibilities, stack } =
    experience

  return (
    <article className="mb-8 w-full mx-auto bg-white ">
      <div className="border border-black rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h3 className="text-gray-900 font-bold text-xl mb-2">
            <Link
              href={`/${localeActive}${link}`}
              className="hover:text-primary-color-300"
            >
              {title}
            </Link>
          </h3>
          <p className="text-sm italic text-gray-600 flex items-center">
            {dates}
          </p>
          <p className="text-base">{description}</p>
          <ul className="list-disc p-3">
            {responsibilities.map((responsibility, i) => {
              return (
                <li key={i} className="text-sm text-gray-8000 mt-3 ml-3">
                  {responsibility}
                </li>
              )
            })}
          </ul>
          <p className="text-center text-primary-color-400 font-semibold">
            {stack}
          </p>
        </div>
      </div>
    </article>
  )
}
