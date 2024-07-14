// next.config.js
import i18nextConfig from './next-i18next.config.js';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  i18n: i18nextConfig.i18n
};

export default nextConfig;
