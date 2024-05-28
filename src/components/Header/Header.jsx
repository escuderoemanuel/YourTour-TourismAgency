import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { sideNav } from "./Header.css";



const Header = () => {
  return (
    <section className={`header flex flex-col w-1/6 p-4 h-screen`}>
      <h1 className={`${inter.className} antialiased`}>Your Tour - Turism Agency</h1>
      <nav className={`sideNav flex flex-col gap-4 p-4 mt-8`} >
        <a href='#' className={''}>Inicio</a>
        <a href='#' className={''}>Nosotros</a>
        <a href='#' className={''}>Servicios</a>
        <a href='#' className={''}>Contacto</a>
      </nav>
    </section>
  );
}

export default Header;
