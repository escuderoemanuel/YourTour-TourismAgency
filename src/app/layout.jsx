
import React from 'react'
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import { inter } from '../ui/fonts';
import "./globals.css";

const favicon = 'https://i.ibb.co/vQM5vzg/favicon.png'


export const metadata = {
  icons: {
    icon: favicon,
  },
  title: "Your Tour ● Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-100`}>
        <Header />
        <main>
          {children}
          <Whatsapp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
