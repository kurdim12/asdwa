import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk, IBM_Plex_Mono, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const displayFont = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
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
  title: {
    default: "Marwan Ahmad Alkurdi & Partners — Engineering Jordan's Infrastructure",
    template: "%s — Marwan Ahmad Alkurdi & Partners",
  },
  description:
    "45 years of engineering excellence in Jordan — dams, bridges, highways, and specialized infrastructure by Marwan Ahmad Alkurdi & Partners.",
  openGraph: {
    title: "Marwan Ahmad Alkurdi & Partners",
    description:
      "45 years of engineering excellence in Jordan — dams, bridges, highways, and specialized infrastructure.",
    url: "https://mkurdi.com",
    siteName: "Marwan Ahmad Alkurdi & Partners",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Ahmad Alkurdi & Partners",
    description: "Engineering Jordan's infrastructure since 1981.",
    images: ["/og.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Marwan Ahmad Alkurdi & Partners Co. Ltd",
  alternateName: "شركة مروان أحمد الكردي وشركاؤه المحدودة",
  url: "https://mkurdi.com",
  logo: "https://mkurdi.com/images/logo.png",
  foundingDate: "1981",
  email: "info@mkurdi.com",
  telephone: "+96265819489",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abdullah Ghosheh St., 7th Circle, Building No. 17",
    addressLocality: "Amman",
    addressCountry: "JO",
  },
  sameAs: ["https://www.facebook.com/mkurdiCom"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${displayFont.variable} ${plexMono.variable} ${notoKufi.variable} bg-base text-steel font-sans antialiased selection:bg-blue selection:text-white overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
