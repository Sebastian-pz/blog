import { useLocale } from 'next-intl'
import Link from 'next/link'

interface propsComponent {
  actualPage: number
  pages: number
  tag: string | null
}

function getUrl(locale: string, page: number, tag: string | null) {
  if (tag) return `/${locale}/q?page=${page + 1}&tag=${tag}`
  return `/${locale}/q?page=${page + 1}`
}

export default function Pagination({ actualPage, pages, tag }: propsComponent) {
  const localeActive = useLocale()
  const pagesToRender = Array(pages).fill(0)

  return (
    <div className="flex justify-center items-center mt-20 ">
      <ul className="flex gap-4">
        {pagesToRender.map((_, i) => {
          return (
            <li key={`page${i}`} className="w-6 h-6">
              <Link
                href={getUrl(localeActive, i, tag)}
                // href={`/${localeActive}/q?page=${i + 1}`}
                className={`
                  border  p-2
                  hover:bg-primary-color-500 hover:shadow-[4.0px_4.0px_rgba(0,0,0)]
                  hover:border-black
                  hover:font-bold
                  hover:scale-110
                  ${actualPage === i + 1 && 'font-bold pointer-events-none shadow-[4.0px_4.0px_rgba(0,0,0)] border border-black bg-primary-color-500 '}`}
                aria-disabled={i + 1 === actualPage}
              >
                {i + 1}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
