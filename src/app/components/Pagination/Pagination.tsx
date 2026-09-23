import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

interface propsComponent {
  actualPage: number
  pages: number
  tag: string | null
}

function getUrl(locale: string, page: number, tag: string | null) {
  const pageNumber = page + 1
  if (tag) return `/${locale}/q?page=${pageNumber}&tag=${encodeURIComponent(tag)}`
  return `/${locale}/q?page=${pageNumber}`
}

export default function Pagination({ actualPage, pages, tag }: propsComponent) {
  const t = useTranslations('pagination')
  const localeActive = useLocale()
  const pagesToRender = Array(pages).fill(0)
  const currentPage = Number.isFinite(actualPage) && actualPage >= 1 ? actualPage : 1

  return (
    <nav aria-label={t('label')} className="mt-12 flex items-center justify-center">
      <ul className="flex list-none gap-3 p-0">
        {pagesToRender.map((_, i) => {
          const pageNumber = i + 1
          const current = currentPage === pageNumber
          return (
            <li key={`page${pageNumber}`}>
              {current ? (
                <span
                  aria-current="page"
                  className="inline-flex h-10 min-w-10 items-center justify-center border-3 border-ink bg-sun font-mono text-sm font-bold shadow-nb-sm"
                >
                  {pageNumber}
                </span>
              ) : (
                <Link
                  href={getUrl(localeActive, i, tag)}
                  aria-label={t('goToPage', { page: pageNumber })}
                  className="inline-flex h-10 min-w-10 items-center justify-center border-3 border-ink bg-paper font-mono text-sm font-bold shadow-nb-sm nb-press"
                >
                  {pageNumber}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
