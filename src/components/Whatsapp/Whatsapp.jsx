import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';
const whatsappLogo = 'https://i.ibb.co/Z6TZgYM/Whatsapp-37229.png'

const Whatsapp = () => {

  return (
    <Image
      className='fixed bottom-8 right-8'
      src={whatsappLogo}
      width={60}
      height={60}
      alt="Picture of the author" />
  );
}

export default Whatsapp;