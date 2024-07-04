
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import { inter } from '../ui/fonts';


export const metadata = {
  icons: {
    icon: 'https://i.ibb.co/Gxk0ktL/Logo2024.png',
  },
  title: "Your Tour ● Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} antialiased bg-neutral-100`}>
        <Header />
        <div className='max-w-screen-xl mx-auto py-2 px-4 md:py-4 px-8 lg:py-8 lg:px-16'>
          {children}
          <Whatsapp />
        </div>
        <Footer />
      </body>
    </html>
  );
}
