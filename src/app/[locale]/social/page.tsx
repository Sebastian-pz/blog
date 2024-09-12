import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  const t = useTranslations('social')
  const socialMediaProfiles = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sebastian-perez-zuluaga/',
    },
    { name: 'GitHub', icon: Github, url: 'https://github.com/sebastian-pz' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/sebastiantfa' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t('mainTitle')}</h1>
      <div className="flex flex-wrap gap-6 my-20 justify-center">
        {socialMediaProfiles.map((profile) => (
          <Card
            key={profile.name}
            className="flex flex-col items-center justify-center p-4 lg:w-60 lg:h-60"
          >
            <CardContent className="flex flex-col items-center space-y-2">
              <profile.icon className="h-8 w-8 text-[#623fdf]" />
              <h2 className="text-lg font-semibold">{profile.name}</h2>
              <Link href={profile.url} target="_blank" passHref>
                <Button
                  className="w-full bg-primary-color-500 hover:bg-primary-color-600 text-white"
                  aria-label={`Visit my ${profile.name} profile`}
                >
                  Follow
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <section className="bg-muted bg-white p-6 lg:p-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
        <p className="mb-4">{t('introduction')}</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>{t('benefits.one')}</li>
          <li>{t('benefits.two')}</li>
          <li>{t('benefits.three')}</li>
          <li>{t('benefits.four')}</li>
        </ul>
        <p>
          By openly sharing our insights, code snippets, tutorials, and
          experiences, we create a more inclusive and innovative tech ecosystem.
          Whether it's through blog posts, open-source contributions, or
          mentoring, every piece of shared knowledge has the potential to make a
          significant impact.
        </p>
        <p className="mt-4 font-semibold">{t('end')}</p>
      </section>
    </div>
  )
}
