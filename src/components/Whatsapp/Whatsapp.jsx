import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const whatsappLogo = 'https://i.ibb.co/Z6TZgYM/Whatsapp-37229.png'
const whatsappLink = 'https://wa.me/5492612061160'
import styles from './Whatsapp.module.css';


const Whatsapp = () => {

  return (
    <Link href={whatsappLink} target='_blank' rel='noopener noreferrer' >
      <Image
        className={`${styles.whatsappLogo} fixed z-50 bottom-8 right-8`}
        src={whatsappLogo}
        width={60}
        height={60}
        alt="Picture of the author" />
    </Link>
  );
}

export default Whatsapp;