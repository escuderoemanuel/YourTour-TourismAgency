import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });
const favicon = "/favicon.png";

export const metadata = {
  icons: {
    icon: favicon,
  },
  title: "Your Tour ● Agencia de Turismo",
  description: "Agencia de turismo personalizado, ubicada en Mendoza, Argentina",
  keywords: "tourism, agency, mendoza, argentina, your, tour, yourtour, agencia, turismo, trip, viajes, excursión, excursion, transfer, traslado, excursiones, excursions, bodega, bodega, vino, wine, vendimia, nieve, travel",
  robots: "all",
  openGraph: {
    type: "website",
    url: "https://yourtour.ar",
    title: "Your Tour ● Agencia de Turismo",
    description: "Agencia de turismo personalizado, ubicada en Mendoza, Argentina",
    images: [
      {
        url: "https://yourtour.ar/og-image.jpg",
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
        <link rel="icon" href={metadata.icons.icon} type="image/png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta name="keywords" content={metadata.keywords} />

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
