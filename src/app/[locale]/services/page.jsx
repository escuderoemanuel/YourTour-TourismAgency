'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { raleway } from '@/ui/fonts';



/* Content */
export default function Services() {
  const t = useTranslations('ServicesPage');

  // 'raw' obtiene los datos anidados sin que sean procesados como una cadena JSON
  const listServices = t.raw('listServices');

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <h1 className={`custom-title ${raleway.className}`}>{t('h1')}</h1>
      <h2 className="sr-only">{t('h2')}</h2>

      <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center">
        {Object.values(listServices).map((service, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 md:mx-4">
            <div className="relative w-full h-52">
              <Image
                alt={service.imageAlt}
                src={service.imageUrl}
                fill
                sizes="(max-width: 384px)"
                loading="lazy"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-5">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
