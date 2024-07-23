import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });
const favicon = "/favicon.ico";

export const metadata = {
  icons: {
    icon: favicon,
  },
  title: "Your Tour ● Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <NextIntlClientProvider messages={messages}>
        <body className={`${inter.className} antialiased bg-neutral-100`}>
          <Header />
          {children}
          <Whatsapp />
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
