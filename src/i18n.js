// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

i18n
  .use(initReactI18next)
  .init({
    ...nextI18NextConfig.i18n,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
