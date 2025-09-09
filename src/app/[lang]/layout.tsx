import "@/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { i18n } from "i18n.config";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${montserrat.variable} scroll-smooth`}>
      <body>
        <Header lang={lang as Locale} />
        {children}
        <Footer lang={lang as Locale} />
        <Toaster />
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const languages = Object.fromEntries([
    ...i18n.locales.map((locale) => [locale, `/${locale}`] as const),
    ["x-default", `/${i18n.defaultLocale}`] as const,
  ]);

  const descriptions = {
    en: "B&B Central with 3 apartments for your dream stay in San Vito Lo Capo",
    de: "B&B Central mit 3 Apartments für Ihren Traumaufenthalt in San Vito Lo Capo",
    it: "B&B Central con 3 appartamenti per il tuo soggiorno da sogno a San Vito Lo Capo",
    sk: "B&B Central s 3 apartmánmi pre váš vysnívaný pobyt v San Vito Lo Capo",
  };

  return {
    title: "B&B Central",
    description: descriptions[lang],
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    metadataBase: new URL("https://centralsanvito.it/"),
    alternates: {
      canonical: `/${lang}`,
      languages,
    },
  };
}
