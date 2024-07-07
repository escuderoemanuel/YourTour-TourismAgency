
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import { inter } from '../ui/fonts';
import favicon from '../../public/favicon.ico'


export const metadata = {
  icons: {
    icon: `https://i.ibb.co/vQM5vzg/favicon.png` || favicon,
  },
  title: "Your Tour ● Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} antialiased bg-neutral-100`}>
        <Header />
        <div className='max-w-screen-lg mx-auto'>
          {children}
          <Whatsapp />
        </div>
        <Footer />
      </body>
    </html>
  );
}
