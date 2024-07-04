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
    <section className={`${raleway.className} flex py-6 px-4 lg:px-16 items-center justify-center bg-sky-700`}>
      <div className='max-w-screen-xl  flex justify-between items-center gap-2 md_gap-4'>
        <p className='text-xs text-neutral-50 text-center text-wrap'>{content.footer.dev.paragraph}</p>
        <Link
          href={devUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            width={30}
            height={30}
            className={`w-5 h-auto ${styles.devLogo}`}
            src={content.footer.dev.img.url}
            alt={content.footer.dev.img.alt}
          />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
