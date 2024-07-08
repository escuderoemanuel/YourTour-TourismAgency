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

  // Set menu as Close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu before clicked/touched it
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`flex flex-col items-end ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      <button
        onClick={toggleMenu}
        className={`align-end lg:hidden p-2 rounded-md focus:outline-none hover:origin-center  hover:scale-y-110 hover:scale-x-110 ease-in-out duration-200`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <div className={`flex-col items-end lg:items-center lg:flex lg:flex-row lg:gap-2 lg:items-center
      ${isOpen ? `py-2 flex items-end top-full left-0 w-full` : 'hidden'}
      `}>

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={handleLinkClick}
            className={`hover:font-bold rounded-md
              ${isScrolled ? 'text-primary-color' : 'text-white-color'}
              ${pathname === link.path ? 'font-bold underline underline-offset-4' : ''}
              `}
          >
            {link.name}
          </Link>
        ))}
        <LanguageSelector isScrolled={isScrolled} />
      </div>
    </nav >
  );
};

export default NavLinks;
