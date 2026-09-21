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
    <div className="mt-12 flex items-center justify-center">
      <ul className="flex gap-3">
        {pagesToRender.map((_, i) => {
          const current = actualPage === i + 1
          return (
            <li key={`page${i}`}>
              <Link
                href={getUrl(localeActive, i, tag)}
                className={`inline-flex h-10 min-w-10 items-center justify-center border-3 border-ink font-mono text-sm font-bold ${
                  current
                    ? 'pointer-events-none bg-sun shadow-nb-sm'
                    : 'bg-paper shadow-nb-sm nb-press'
                }`}
                aria-disabled={current}
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
