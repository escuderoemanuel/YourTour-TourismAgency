import React from 'react';
import './Header.css';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';
const logo = 'https://i.ibb.co/7rcr25z/airplane.png';
import Link from 'next/link';

const Header = () => {
  return (
    <section className={`header flex flex-col w-1/6 p-4 h-screen`}>
      <div className={`headerTop ${inter.className} antialiased`}>
        <h1>Your Tour</h1>
        <h3>Turism Agency</h3>
        <Image
          className='headerLogo'
          src={logo}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <nav className={`sideNav flex flex-col gap-4 p-4 mt-8`}>
        <Link href="/home">
          Inicio
        </Link>
        <Link href="/about">
          Nosotros
        </Link>
        <Link href="/excursions">
          Excursiones
        </Link>
        <Link href="/services">
          Servicios
        </Link>
        <Link href="/contact">
          Contacto
        </Link>
      </nav>
    </section>
  );
}

export default Header;
