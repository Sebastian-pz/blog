import type { Metadata } from "next";
import "./globals.css";

import { Roboto as font } from "next/font/google";

import FooterComponent from "@/components/footer/footer";
import Navbar from "@/components/NavBar/NavBarComponent";

export const metadata: Metadata = {
  title: "Blog - Sebastian Pérez ",
  description:
    "Este es el portafolio y blog de Sebastian Pérez en el que se habla de opiniones sobre tecnologías, las experiencias y demás tópicos relacionados, se puede observar mi el trayecto como programador web fullstack acá.",
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
        <header>
          <Navbar />
        </header>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
