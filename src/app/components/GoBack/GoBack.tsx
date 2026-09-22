import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'

export default function GoBack() {
  const t = useTranslations('a11y')

  return (
    <Link
      href="/"
      className="mb-6 inline-flex border-3 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold uppercase shadow-nb-sm nb-press"
    >
      <span aria-hidden="true">← </span>
      {t('backHome')}
    </Link>
  )
}
