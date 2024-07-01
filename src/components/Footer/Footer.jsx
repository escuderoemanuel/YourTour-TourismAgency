import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import content from '../../translations/es/global.json'
import Link from 'next/link';
const devUrl = 'https://emanuelescudero.ar';
// import { useTranslation } from 'react-i18next';

const Footer = () => {
  /* i18Next Translation */
  // const [t, i18n] = useTranslation('global');

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className={`${styles.footer} flex flex-row py-6 px-16 gap-4 items-center justify-center `}>
      <p className='text-white'>{content.footer.paragraph}</p>
      <Link
        href={devUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          width={30}
          height={30}
          className={styles.devLogo}
          src={content.footer.img.url}
          alt={content.footer.img.alt}
        />
      </Link>
    </section>
  );
};

export default Footer;
