import type { Metadata } from "next";
import { Inter, Oswald, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const notoKufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi" });

export const metadata: Metadata = {
  title: "Marwan Ahmad Alkurdi & Partners",
  description: "25 Years of Engineering Excellence in Jordan - Dams, Power Stations, & Infrastructure",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Marwan Ahmad Alkurdi & Partners",
    description: "25 Years of Engineering Excellence in Jordan - Dams, Power Stations, & Infrastructure",
    url: "https://mkurdi.com",
    siteName: "Marwan Ahmad Alkurdi & Partners",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} ${notoKufi.variable} bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground overflow-x-hidden`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
