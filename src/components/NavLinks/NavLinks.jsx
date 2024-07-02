'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import content from '../../translations/es/global.json';

const NavLinks = ({ isScrolled }) => {
  const pathname = usePathname();
  const links = Object.values(content.navLinks);

  return (
    <nav className="flex gap-3">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`hover:font-bold rounded-md 
            ${isScrolled ? 'text-primary-color' : 'text-white-color'}
            ${pathname === link.path ? 'font-bold underline underline-offset-4' : ''}
            `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
