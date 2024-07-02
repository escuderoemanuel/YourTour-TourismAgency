'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import content from '../../translations/es/global.json'


const NavLinks = () => {
  const pathname = usePathname()
  const links = Object.values(content.navLinks);
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
