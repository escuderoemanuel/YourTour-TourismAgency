'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import content from '../../translations/es/global.json';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const NavLinks = ({ isScrolled }) => {
  const pathname = usePathname();
  const links = Object.values(content.navLinks);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`flex flex-col items-end ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden p-2 rounded-md focus:outline-none hover:origin-center hover:scale-y-110 hover:scale-x-110 ease-in-out duration-200`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Links container */}
      <div className={`flex-col items-end lg:items-center lg:flex lg:flex-row lg:gap-2 lg:items-center ${isOpen ? 'py-2 flex items-end top-full left-0 w-full' : 'hidden'}`}>
        {/* Map through navigation links */}
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            className={`${isScrolled ? 'text-primary-color' : 'text-white-color'} ${pathname !== link.href ? 'hover:underline hover:underline-offset-4' : ''} ${pathname === link.href ? 'font-bold cursor-default' : ''}`}
          >
            {link.name}
          </Link>
        ))}

        {/* Language selector component */}
        <LanguageSelector isScrolled={isScrolled} />
      </div>
    </nav>
  );
};

export default NavLinks;
