'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { name: 'WELCOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'EXCURSIONS', path: '/excursions' },
  { name: 'SERVICES', path: '/services' },
  { name: 'CONTACT', path: '/contact' },
];

const NavLinks = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`text-white hover:font-bold 
            ${pathname === link.path ? 'font-bold underline underline-offset-4' : ''}
            `}
        >
          {link.name}
        </Link>
      ))}
    </nav>

  );
}

export default NavLinks;
