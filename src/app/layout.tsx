import "@/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "B&B Central",
  description: "Alojamiento frente al mar - Landing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
