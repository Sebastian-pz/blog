import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

import FooterComponent from '@/app/components/footer/footer'
import Navbar from '@/app/components/NavBar/NavBarComponent'
import { fontDisplay, fontMono, fontSans } from '@/app/ui/fonts'
import { routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: 'Blog - Sebastian Perez Dev',
  description:
    'Technology blog, created by Sebastian Perez. Find articles, tips and resources about web development and software in general.',
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

  return (
    <html lang={locale}>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontSans.className} bg-canvas text-ink`}
      >
        <NextIntlClientProvider>
          <Navbar />
          <div className="pt-24">{children}</div>
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
