
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import { praise, raleway, dynalight, inter } from '@/ui/fonst';


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

      <body className={`${inter.className} antialiased bg-amber-500`}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
