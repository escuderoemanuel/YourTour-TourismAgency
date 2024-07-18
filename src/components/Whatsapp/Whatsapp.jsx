'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const whatsappLogo = '/img/wtsp.png'
const whatsappLink = 'https://wa.me/542613333966'


export default function Whatsapp() {
  return (
    <Link href={whatsappLink} target='_blank' rel='noopener noreferrer' className='z-10'>
      <Image
        className={`hover:origin-center hover:rotate-12 hover:scale-x-110 hover:scale-y-110 ease-in-out duration-300 sticky z-50 bottom-4 right-4 ml-auto md:right-16 xl:right-28 2xl:right-40 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]`}
        src={whatsappLogo}
        width={60}
        height={60}
        // quality={100}
        loading="lazy"
        alt="Whatsapp Icon" />
    </Link>
  );
}
