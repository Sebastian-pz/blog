import Link from 'next/link'

export default function GoBack() {
  return (
    <abbr title="Volver a los posts" className="no-underline">
      <Link
        href="/"
        className="sticky top-[95%] left-[70%] bg-slate-200 px-3 border border-slate-400 rounded-md text-xl sm:text-2xl sm:left-[85%] hover:bg-slate-300"
      >
        ⬅️ Volver
      </Link>
    </abbr>
  )
}
