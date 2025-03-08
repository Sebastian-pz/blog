import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { Roboto as font } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

import FooterComponent from '@/app/components/footer/footer'
import Navbar from '@/app/components/NavBar/NavBarComponent'

export const metadata: Metadata = {
  title: 'Blog - Sebastian Perez Dev',
  description:
    'Technology blog, created by Sebastian Perez. Find articles, tips and resources about web development and software in general.',
}

const fontSettings = font({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  // Use getLocale from next-intl/server to properly handle the locale in a server component
  const locale = await getLocale()
  
  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to default locale if messages for the requested locale are not found
    messages = (await import(`../../../messages/en.json`)).default;
  }

  return (
    <html lang={locale}>
      <body className={`${fontSettings.className} bg-bg-color`}>
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
