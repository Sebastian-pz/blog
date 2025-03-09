import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

import FooterComponent from '@/app/components/footer/footer'
import Navbar from '@/app/components/NavBar/NavBarComponent'
import { roboto } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: 'Blog - Sebastian Perez Dev',
  description:
    'Technology blog, created by Sebastian Perez. Find articles, tips and resources about web development and software in general.',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const locale = await getLocale()
  const messages = (await import(`../../../messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body className={`${roboto.className} bg-bg-color`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="mb-20">
            <Navbar />
          </header>
          {children}
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
