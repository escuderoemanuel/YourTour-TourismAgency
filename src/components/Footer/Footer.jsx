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
    <section className={`footer p-4`}>
      <h1>Footer</h1>
    </section>
  );
};

export default Footer;
