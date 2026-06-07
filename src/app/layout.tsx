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
      <body className="min-h-full flex flex-col bg-mh-bg text-mh-text">
        {children}
      </body>
    </html>
  );
}
