import type { Metadata } from "next";
import { Archivo, Barlow, Michroma } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

// Variable font with the width axis: titles use font-stretch 125%
const archivo = Archivo({
  axes: ["wdth"],
  variable: "--font-archivo",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heaven Creative",
  description: "Portfólio de vídeos imobiliários e produção criativa.",
};

import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Plasma from "@/components/Plasma";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${archivo.variable} ${michroma.variable}`}>
      <body className="antialiased">
        {/* Site-wide ambient background, fixed behind every page */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Plasma color="#ffffff" speed={0.5} scale={1.1} opacity={0.3} maxDpr={1} />
        </div>
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
