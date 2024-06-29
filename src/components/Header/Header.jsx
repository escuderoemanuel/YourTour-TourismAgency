import React from 'react';
import './Header.css';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';
const logo = 'https://i.ibb.co/7rcr25z/airplane.png';
import Link from 'next/link';

const Header = () => {
  return (
    <section className={`headerSection flex flex-row py-6 px-16 justify-between items-center 	sticky top-0 bg-red-600`}>
      <div className={`flex items-center text-center bg-amber-400 gap-1`}>
        <Image
          className='headerLogo'
          src={logo}
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <div className={`flex-col text-start ms-4`}>
          <h1>Your Tour</h1>
          <h3>Turism Agency</h3>
        </div>
      </div>
      <nav className={`navbar flex flex-row gap-4 items-center justify-between bg-amber-400	 `}>
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
      <div className={`headerBottom ${inter.className} antialiased items-center text-center bg-amber-400	`}>
        <h3>Idioma</h3>
      </div>
    </section>
  );
}

export default Header;
