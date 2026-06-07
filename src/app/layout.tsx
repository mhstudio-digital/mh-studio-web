import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MH Studio — Diseño Web Premium en Costa Rica",
  description:
    "Creamos sitios web profesionales para restaurantes, tiendas y emprendedores en Costa Rica. Diseño premium, resultados reales.",
  keywords: "diseño web Costa Rica, sitios web profesionales, agencia web CR",
  metadataBase: new URL("https://mhstudio-digital.github.io/mh-studio-web"),
  openGraph: {
    title: "MH Studio — Diseño Web Premium en Costa Rica",
    description:
      "Creamos sitios web profesionales para restaurantes, tiendas y emprendedores en Costa Rica. Diseño premium, resultados reales.",
    url: "https://mhstudio-digital.github.io/mh-studio-web",
    siteName: "MH Studio",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MH Studio — Diseño Web Premium en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Studio — Diseño Web Premium en Costa Rica",
    description:
      "Creamos sitios web profesionales para restaurantes, tiendas y emprendedores en Costa Rica. Diseño premium, resultados reales.",
    images: ["/og-image.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MH Studio",
  description:
    "Agencia de diseño web premium en Costa Rica para restaurantes, tiendas y emprendedores.",
  url: "https://mhstudio-digital.github.io/mh-studio-web",
  telephone: "+50683674466",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
    addressRegion: "San José",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.9281,
    longitude: -84.0907,
  },
  priceRange: "$$",
  servesCuisine: null,
  sameAs: [],
  openingHours: "Mo-Fr 08:00-18:00",
  serviceType: "Diseño y desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="xVWOhXeMAwp8pIJbZr9McJvn3w2tj_12Uz2eADf7o_g"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-mh-bg text-mh-text">
        {children}
      </body>
    </html>
  );
}
