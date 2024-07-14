// src/app/layout.jsx
import React from 'react'
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import "./globals.css";
import { inter } from '../ui/fonts';


const favicon = '/favicon.ico'


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
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
