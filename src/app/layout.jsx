import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Body from '@/components/Body/Body';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Tour -  Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className}`}>
        <div className={`generalContainer flex flex-row`}>
          <Header className={`h-screen`} />
          <Body className={`flex flex-col`} />
        </div>
        <Footer />
      </body>
    </html>
  );
}
