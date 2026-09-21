import Link from 'next/link'

interface propsComponent {
  link: string
  label: string
}

export default function Tag({ label, link }: propsComponent) {
  return (
    <Link
      href={link}
      className="nb-stamp bg-lime px-3 py-1 text-xs nb-press"
      prefetch={false}
    >
      {label}
    </Link>
  )
}
