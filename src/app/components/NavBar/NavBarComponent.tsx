'use client'

import { useTranslations } from 'next-intl'
import LINK_LIST from './Constants'

import LocaleSwitcher from '@/app/components/LocaleSwitcher/LocaleSwitcher'
import { Link, usePathname } from '@/i18n/navigation'
import type { PostRef } from '@/lib/post-types'

export default function Navbar({ postRefs }: { postRefs: PostRef[] }) {
  const t = useTranslations('navBar')
  const pathname = usePathname()

  const tRoutes = LINK_LIST.map((route) => {
    return {
      ...route,
      label: t(route.label),
    }
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-3 border-ink bg-paper shadow-nb">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 md:px-6">
        <Link
          href="/"
          className="nb-stamp bg-sun px-2 py-1 text-xs md:px-3 md:text-sm"
        >
          SPZ
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-2 md:gap-3">
          {tRoutes.map((route) => {
            const { label, path } = route
            const active = path === '/' ? pathname === '/' : pathname.startsWith(path)
            return (
              <Link
                href={path}
                key={path}
                className={`border-3 border-ink px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide nb-press md:text-sm ${
                  active ? 'bg-sun shadow-nb-sm' : 'bg-paper shadow-nb-sm'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <LocaleSwitcher postRefs={postRefs} />
        </div>
      </nav>
    </header>
  )
}
