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
    <section className={`py-3 px-4 sticky z-50 top-0  md:py-4 md:px-12 lg:py-6 lg-px-16
    ${isScrolled ? 'glassBackground' : 'bg-sky-700'} 
    ${raleway.className} `}>

      <div className='max-w-screen-xl mx-auto flex flex-row justify-between items-start lg:items-center'>

        <Image
          className={`w-44 h-auto sm:w-56 md:w-64`}
          src={`${isScrolled ? content.logo.yourTourPrimaryLogo : content.logo.yourTourSecondaryLogo}`}
          width={256}
          height={150}
          alt="Picture of the author"
        />

        <NavLinks isScrolled={isScrolled} />
      </div>
    </section>
  );
};

export default Header;
