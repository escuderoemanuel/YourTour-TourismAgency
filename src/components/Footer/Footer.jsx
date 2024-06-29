import React from 'react';
import './Footer.css';
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
    <section className={`footer flex flex-col py-6 px-16 gap-4 items-center bg-amber-400`}>
      <h1>Footer</h1>
    </section>
  );
};

export default Footer;
