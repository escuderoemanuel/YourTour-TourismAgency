'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavLinks from '../NavLinks/NavLinks';
import content from '../../translations/es/global.json';
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

  {/* <section className={`py-3 px-4 sticky z-50 top-0 md:py-4 md:px-12 lg:py-6 lg:px-24 ${isScrolled ? 'glassBackground' : 'bg-sky-700'} ${raleway.className}`}>
    <div className='max-w-screen-xl mx-auto flex flex-row justify-between items-start lg:items-center'>
      <Image
        src={isScrolled ? content.logo.yourTourPrimaryLogo : content.logo.yourTourSecondaryLogo}
        className={`w-44 h-auto sm:w-56 sm:h-auto md:w-64 md:h-auto`}
        width={256}
        height={150}
        alt="Your Tour Logo"
      />
      <NavLinks isScrolled={isScrolled} />
    </div>
  </section> */}
  return (
    <section className={`py-3 px-4 sticky z-50 top-0 md:py-4 md:px-12 lg:py-6 lg:px-24 ${isScrolled ? 'glassBackground' : 'bg-sky-700'} ${raleway.className}`}>
      <div className='max-w-screen-xl mx-auto flex flex-row justify-between items-start lg:items-center'>
        <div className="relative w-44 h-10 sm:w-56 md:w-64 md:h-14 lg:w-72">
          <Image
            src={isScrolled ? content.logo.yourTourPrimaryLogo : content.logo.yourTourSecondaryLogo}
            fill
            sizes="(max-width: 256px)"
            style={{ objectFit: 'contain' }}
            alt="Your Tour Logo"
            priority={true}
          />
        </div>
        <NavLinks isScrolled={isScrolled} />
      </div>
    </section>
  );
};

export default Header;
