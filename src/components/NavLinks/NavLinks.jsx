import Link from 'next/link';
import React from 'react';

const links = [
  { name: 'WELCOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'EXCURSIONS', path: '/excursions' },
  { name: 'SERVICES', path: '/services' },
  { name: 'CONTACT', path: '/contact' },
];

const NavLinks = () => {
  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className="text-white hover:text-gray-200"
        >
          {link.name}
        </Link>
      ))}
    </nav>

  );
}

export default NavLinks;
