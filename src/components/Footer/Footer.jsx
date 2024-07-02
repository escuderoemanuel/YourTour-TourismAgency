import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import content from '../../translations/es/global.json'
import Link from 'next/link';
const devUrl = 'https://emanuelescudero.ar';
import { inter, praise, raleway } from '../../ui/fonts';

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
    <section className={`${raleway.className} flex flex-row py-6 px-16 gap-4 items-center justify-center bg-neutral-400 bg-sky-700`}>
      <div className='max-w-screen-xl mx-auto flex flex-row justify-between items-center gap-4'>
        <p className='text-neutral-50'>{content.footer.paragraph}</p>
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
      </div>
    </section>
  );
};

export default Footer;
