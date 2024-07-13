import React from 'react'
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import "./globals.css";
import { inter } from '../ui/fonts';
import Head from 'next/head'; // Importar Head de Next.js

const favicon = '/favicon.ico'

export const metadata = {
  icons: {
    icon: favicon,
  },
  title: "Your Tour ● Tourism Agency",
  description: "Tourism Agency Website located in Mendoza, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} antialiased bg-neutral-100`}>
        <Header />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
