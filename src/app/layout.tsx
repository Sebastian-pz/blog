import type { Metadata } from "next";
import "./globals.css";

import { Inter as font } from "next/font/google";

import FooterComponent from "./components/footer/footer";
import Navbar from "./components/NavBar/navbar";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is my blog",
};

const fontSettings = font({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
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
