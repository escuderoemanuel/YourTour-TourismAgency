'use client';
import { praise } from '../../ui/fonts';
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14">

      <HomeCarousel />
      <div className="py-2 sm:px-2 md:py-4 md:px-4 text-lg mt-2 md:mt-6">
        <h1 className="custom-title">{t('h1')}</h1>
        <h2 className="sr-only">{t('h2')}</h2>
        <p>
          <span>{t('paragraph1')} </span>
          <span className={`custom-spam`}>{t('span')} </span>
          <span>{t('paragraph2')} </span>
          <span className={`custom-spam`}>{t('spanFinal')}</span>
          <span>{t('slogan')} </span>
        </p>
      </div>
    </section>
  );
}
