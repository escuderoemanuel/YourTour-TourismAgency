// src/app/page.jsx
'use client';
import { useTranslation } from 'react-i18next';
import { praise } from '../ui/fonts';
import content from '../../public/locales/es/common.json';
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';
import i18n from '../i18n'; // Importa i18n desde tu configuración

export default function Home() {
  const { t } = useTranslation('common', { i18n });

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14">
      <HomeCarousel />
      <div className="py-2 sm:px-2 md:py-4 md:px-4 text-lg mt-2 md:mt-6">
        <p>
          <span>{t('example')}</span>
          <br />
          <span>{t('home.paragraph1')}</span>
          <br />
          <span className={`text-2xl me-1 ${praise.className}`}>{t('home.span')}</span>
          <br />
          <span className={`text-2xl me-1 ${praise.className}`}>{content.home.span}</span>
          <span>{content.home.paragraph2}</span>
          <span className={`text-2xl ${praise.className}`}>{content.home.spanFinal}</span>
        </p>
      </div>
    </section>
  );
}
