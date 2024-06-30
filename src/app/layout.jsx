import { Inter, Aclonica } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'

const inter = Inter({ subsets: ["latin"] });
const aclonica = Aclonica({
  weight: ["400"],
  subsets: ["latin"],
});

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

      <body className={`${inter.className}`}>
        <Header />
        <div className={``} >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
