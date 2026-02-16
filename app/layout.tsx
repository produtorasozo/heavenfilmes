import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heaven Filmes",
  description: "Portfólio de vídeos imobiliários e produção criativa.",
};

import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased`}
      >
        <LanguageProvider>
          <SmoothScroll>
            <Header />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
