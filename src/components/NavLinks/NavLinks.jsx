'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLocale, useTranslations } from 'next-intl';

export default function NavLinks({ isScrolled }) {
  const t = useTranslations('NavLinks')
  const pathname = usePathname();
  const localActive = useLocale();

  // State to control menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Function to construct the href correctly
  const constructHref = (path) => {
    // Remove any leading slash from path
    const cleanedPath = path.startsWith('/') ? path.substring(1) : path;
    return `/${localActive}/${cleanedPath}`;
  };

  return (
    <nav className={`flex flex-col items-end ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      {/* Mobile menu toggle button */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
        className={`lg:hidden p-2 rounded-md focus:outline-none hover:origin-center hover:scale-y-110 hover:scale-x-110 ease-in-out duration-200`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Links container */}
      <div className={`flex-col items-end lg:flex lg:flex-row lg:gap-2 lg:items-center ${isOpen ? 'py-2 flex items-end top-full left-0 w-full' : 'hidden'}`}>

        <Link
          key={t('home')}
          href={constructHref('/')}
          onClick={handleLinkClick}
          className={`${isScrolled ? 'text-primary-color' : 'text-white-color'} ${pathname !== `/${localActive}` ? 'hover:underline hover:underline-offset-4' : ''} ${pathname === `/${localActive}` ? 'font-bold cursor-default' : ''}`}
        >{t('home')}</Link>

        <Link
          key={t('excursions')}
          href={constructHref('/excursions')}
          onClick={handleLinkClick}
          className={`${isScrolled ? 'text-primary-color' : 'text-white-color'} ${pathname !== `/${localActive}/excursions` ? 'hover:underline hover:underline-offset-4' : ''} ${pathname === `/${localActive}/excursions` ? 'font-bold cursor-default' : ''}`}
        >{t('excursions')}</Link>

        <Link
          key={t('services')}
          href={constructHref('/services')}
          onClick={handleLinkClick}
          className={`${isScrolled ? 'text-primary-color' : 'text-white-color'} ${pathname !== `/${localActive}/services` ? 'hover:underline hover:underline-offset-4' : ''} ${pathname === `/${localActive}/services` ? 'font-bold cursor-default' : ''}`}
        >{t('services')}</Link>

        <Link
          key={t('contact')}
          href={constructHref('/contact')}
          onClick={handleLinkClick}
          className={`${isScrolled ? 'text-primary-color' : 'text-white-color'} ${pathname !== `/${localActive}/contact` ? 'hover:underline hover:underline-offset-4' : ''} ${pathname === `/${localActive}/contact` ? 'font-bold cursor-default' : ''}`}
        >{t('contact')}</Link>

        {/* Language selector component */}
        <LanguageSelector isScrolled={isScrolled} />
      </div>
    </nav>
  );
};

