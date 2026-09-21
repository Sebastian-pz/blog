import Link from 'next/link'

export default function GoBack() {
  return (
    <Link
      href="/"
      className="mb-6 inline-flex border-3 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold uppercase shadow-nb-sm nb-press"
    >
      ← Back
    </Link>
  )
}
