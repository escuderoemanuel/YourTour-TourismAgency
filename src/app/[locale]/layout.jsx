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
  openGraph: {
    type: "website",
    url: "https://yourtour.ar",
    title: "Your Tour ● Turism Agency",
    description: "Turism Agency Website located in Mendoza, Argentina",
    images: [
      {
        url: "https://yourtour.ar/favicon.ico",
        width: 200,
        height: 200,
      },
    ],
  }
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="all" />
        <meta name="author" content="Emanuel Escudero" />
        <meta name="keywords" content="turism, agency, mendoza, argentina, your, tour, yourtour, agencia, turismo, trip, viajes, excursión, excursion, transfer, traslado, excursiones, excursions" />
        <meta name="google-site-verification" content="lzaAKkFRGWPg-dx0DDa_P2s4WB7YLg5sebUUDFE24dQ" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
      </Head>
      <NextIntlClientProvider messages={messages}>
        <body className={`${inter.className} antialiased bg-neutral-100`}>
          <Header />
          <main className='pb-2 md:pb-4'>
            {children}
            <Whatsapp />
          </main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
