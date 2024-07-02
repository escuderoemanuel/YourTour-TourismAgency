'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
const logo = 'https://i.ibb.co/7rcr25z/airplane.png';
import NavLinks from '../NavLinks/NavLinks';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import content from '../../translations/es/global.json';
// Importar fuentes
import { praise, raleway, raleway600 } from '../../ui/fonts';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`flex flex-row py-6 px-16 justify-between items-center sticky z-50 top-0 ${isScrolled ? 'glassBackground' : 'bg-sky-700'} ${raleway.className} border-b-2`}>
      <div className={`flex items-center text-center`}>
        <Image
          className=''
          src={logo}
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <div className={`flex-col text-start ms-2 `}>
          <h1 className={`text-3xl ${praise.className}  -mb-2.5 ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>{content.header.titleHeader}</h1>
          <h3 className={`text-sm font-bold ${raleway600.className} ps-4 ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>{content.header.subtitleHeader}</h3>
        </div>
      </div>
      <NavLinks />
      <LanguageSelector />
    </section>
  );
};

export default Header;
