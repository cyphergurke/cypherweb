import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import MobileMenu from "@/components/ui/MobileMenu";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davids Portfolio",
  description: "Modern & Minimal Web developer Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative dark:bg-black-100 bg-slate-300 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
              <div className="w-full z-50 sm:hidden block">
                <MobileMenu />
              </div>
              <div className="sm:block hidden">
                <FloatingNav />
              </div>
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
