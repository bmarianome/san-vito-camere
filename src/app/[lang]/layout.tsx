import "@/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { i18n } from "i18n.config";

export const metadata: Metadata = {
  title: "B&B Central",
  description: "Alojamiento frente al mar - Landing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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
