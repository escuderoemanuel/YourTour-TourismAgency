// next-i18next.config.js
/** @type {import('next-i18next').UserConfig} */

import path from 'path'

const localePath = path.resolve('./public/locales');

const i18nextConfig = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'pt'],
  },
  localePath
};

export default i18nextConfig;