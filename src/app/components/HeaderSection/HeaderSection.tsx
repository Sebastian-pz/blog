import { useTranslations } from 'next-intl'

export default function HeaderSection() {
  const t = useTranslations('headerSection')

  return (
    <header className="bg-muted md:pt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t('title')}
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
