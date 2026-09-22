import { useTranslations } from 'next-intl'
import type { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export default function ExternalLink({ href, className, children }: ExternalLinkProps) {
  const t = useTranslations('a11y')

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> ({t('opensInNewTab')})</span>
    </a>
  )
}
