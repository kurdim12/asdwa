import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mkurdi.com"),
  title: "Marwan Ahmad Alkurdi & Partners — Engineering Jordan's Infrastructure",
  description:
    "45 years of engineering excellence in Jordan — dams, bridges, highways, and specialized infrastructure by Marwan Ahmad Alkurdi & Partners.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Marwan Ahmad Alkurdi & Partners",
    description:
      "45 years of engineering excellence in Jordan — dams, bridges, highways, and specialized infrastructure.",
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
      <body
        className={`${inter.variable} ${fraunces.variable} ${plexMono.variable} ${notoKufi.variable} bg-paper text-ink font-sans antialiased selection:bg-brass selection:text-white overflow-x-hidden`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
