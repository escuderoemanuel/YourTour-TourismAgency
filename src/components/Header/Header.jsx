'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavLinks from '../NavLinks/NavLinks';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
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

  // Limpia las rutas de las imágenes para evitar espacios adicionales
  const primaryLogoSrc = t('primaryLogo').trim();
  const secondaryLogoSrc = t('secondaryLogo').trim();

  return (
    <section className={`py-3 px-4 sticky z-50 top-0 md:py-4 md:px-12 lg:py-6 lg:px-24 ${isScrolled ? 'glassBackground' : 'bgHeader'}`}>
      <div className='max-w-screen-xl mx-auto flex flex-row justify-between items-start lg:items-center'>
        <Link href="/" className="relative w-44 h-10 sm:w-56 md:w-64">
          <Image
            src={isScrolled ? primaryLogoSrc : secondaryLogoSrc}
            fill
            sizes="(max-width: 256px)"
            style={{ objectFit: 'contain' }}
            alt="Your Tour Logo"
            priority={true}
          />
        </Link>
        <NavLinks isScrolled={isScrolled} />
      </div>
    </section>
  );
};
