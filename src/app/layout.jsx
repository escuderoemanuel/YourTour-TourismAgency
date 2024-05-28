import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Tour -  Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className}`}>
        <div className={`flex flex-col`}>
          <Header className={`h-screen`} />
          <div className={``} >
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
