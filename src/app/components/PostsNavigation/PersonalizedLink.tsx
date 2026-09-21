import Link from 'next/link'

interface PersonalizedLinkProps {
  href: string
  label: string
}

export default function PersonalizedLink({
  href,
  label,
}: PersonalizedLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center border-3 border-ink bg-brand px-4 py-3 font-display text-sm font-extrabold uppercase text-paper shadow-nb-sm nb-press md:px-6 md:text-base"
    >
      {label}
    </Link>
  )
}
