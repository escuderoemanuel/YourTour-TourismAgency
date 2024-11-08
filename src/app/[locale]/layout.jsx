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
  title: "Your Tour | Turismo en Mendoza, Argentina - Excursiones y Viajes - Traslados",
  description: "Descubre excursiones únicas en Mendoza, Argentina. Tours personalizados de vino, montañas, excursiones personalizadas y mucho más con Your Tour.",
  keywords: "turismo mendoza, agencia de viajes, excursiones en mendoza, tours de vino, traslados aeropuerto mendoza, actividades en mendoza, turismo aventura, tourism, agency, mendoza, argentina, your, tour, yourtour, agencia, turismo, trip, viajes, excursión, excursion, transfer, traslado, excursiones, excursions, bodega, bodega, vino, wine, vendimia, nieve, travel",
  robots: "all",
  openGraph: {
    type: "website",
    url: "https://yourtour.ar",
    title: "Your Tour | Turismo en Mendoza, Argentina",
    description: "Agencia de turismo personalizado en Mendoza, especializada en excursiones únicas y traslados.",
    images: [
      {
        url: "https://yourtour.ar/og-image.jpg",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtour",
    title: "Your Tour | Turismo en Mendoza",
    description: "Descubre excursiones únicas en Mendoza con tours personalizados.",
    image: "https://yourtour.ar/og-image.jpg",
  }
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <Head>
        {/* Favicon */}
        <link rel="icon" href={metadata.icons.icon} type="image/png" />

        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />

        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Hreflang for Language Targeting */}
        <link rel="alternate" href="https://yourtour.ar/es" hreflang="es" />
        <link rel="alternate" href="https://yourtour.ar/en" hreflang="en" />
        <link rel="alternate" href="https://yourtour.ar/pt" hreflang="pt" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Your Tour",
              "description": "Agencia de turismo en Mendoza, Argentina. Ofrecemos excursiones, traslados y tours personalizados.",
              "image": "https://yourtour.ar/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mendoza",
                "addressRegion": "Mendoza",
                "postalCode": "5500",
                "addressCountry": "AR"
              },
              "telephone": "+54 9 261 333-3966",
              "openingHours": "Mo-Su 08:00-22:00",
              "offers": {
                "@type": "Offer",
                "url": "https://yourtour.ar"
              }
            }
          `}
        </script>
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
