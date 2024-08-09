import type { Metadata } from "next";
import "./globals.css";

import { Roboto as font } from "next/font/google";

import FooterComponent from "@/components/footer/footer";
import Navbar from "@/components/NavBar/NavBarComponent";

export const metadata: Metadata = {
  title: "Blog - Sebastian Perez Dev",
  description:
    "Technology blog, created by Sebastian Perez. Find articles, tips and resources about web development and software in general.",
};

const fontSettings = font({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={fontSettings.className}>
        <header className="mb-20">
          <Navbar />
        </header>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
