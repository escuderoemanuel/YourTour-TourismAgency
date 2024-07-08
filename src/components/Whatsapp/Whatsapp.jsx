import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const whatsappLogo = 'https://i.ibb.co/Z6TZgYM/Whatsapp-37229.png'
const whatsappLink = 'https://wa.me/542613333966'


const Whatsapp = () => {
  return (
    <Link href={whatsappLink} target='_blank' rel='noopener noreferrer' className='z-10'>
      <Image
        className={`hover:origin-center hover:rotate-12 hover:scale-x-110 hover:scale-y-110 ease-in-out duration-300 sticky z-50 bottom-4 ml-auto`}
        src={whatsappLogo}
        width={60}
        height={60}
        alt="Picture of the author" />
    </Link>
  );
}

export default Whatsapp;