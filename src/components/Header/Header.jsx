'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import NavLinks from '../NavLinks/NavLinks';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import content from '../../translations/es/global.json';
// Importar fuentes
import { raleway } from '../../ui/fonts';

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
    <section className={`py-4 px-10 sticky z-50 top-0 border-b-2 md:py-6 md-px-16
    ${isScrolled ? 'glassBackground' : 'bg-sky-700'} 
    ${raleway.className} `}>

      <div className='max-w-screen-xl mx-auto flex flex-col justify-between items-center md:flex-row'>

        <Image
        className={`mb-4 md:mb-0`}
          src={`${isScrolled ? content.logo.yourTourPrimaryLogo : content.logo.yourTourSecondaryLogo}`}
          width={250}
          height={150}
          alt="Picture of the author"
        />

        <NavLinks isScrolled={isScrolled} />
        <LanguageSelector isScrolled={isScrolled} />
      </div>
    </section>
  );
};

export default Header;
