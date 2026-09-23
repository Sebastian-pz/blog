import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

import FooterComponent from '@/app/components/footer/footer'
import Navbar from '@/app/components/NavBar/NavBarComponent'
import { fontDisplay, fontMono, fontSans } from '@/app/ui/fonts'
import { routing } from '@/i18n/routing'
import { getPostRefs } from '@/lib/posts'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: '%s · Sebastian Pérez',
    },
    description: t('description'),
    openGraph: {
      siteName: 'Sebastian Pérez',
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const postRefs = getPostRefs()

  return (
    <html lang={locale}>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontSans.className} bg-canvas text-ink`}
      >
        <NextIntlClientProvider>
          <Navbar postRefs={postRefs} />
          <div className="pt-24">{children}</div>
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
