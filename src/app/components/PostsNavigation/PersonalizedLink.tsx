import Link from 'next/link'

interface PersonalizedLinkProps {
  href: string
  label: string
  current?: boolean
}

export default function PersonalizedLink({
  href,
  label,
  current = false,
}: PersonalizedLinkProps) {
  return (
    <Link
      href={href}
      aria-current={current ? 'page' : undefined}
      className={`inline-flex items-center justify-center border-3 border-ink px-4 py-3 font-display text-sm font-extrabold uppercase shadow-nb-sm nb-press md:px-6 md:text-base ${
        current ? 'bg-sun text-ink' : 'bg-brand text-paper'
      }`}
    >
      {label}
    </Link>
  )
}
