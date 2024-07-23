'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Excursions() {
  const t = useTranslations('ExcursionsPage');

  // Flowbite requiere useEffect para inicializar en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite');
    }
  }, []);

  // 'raw' obtiene los datos anidados sin que sean procesados como una cadena JSON
  const excursionsData = t.raw('listExcursions');
  const listExcursions = Object.values(excursionsData).map(excursion => ({
    title: excursion.title,
    description: excursion.description,
    images: Object.values(excursion.listImages)
  }));

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center">

        {listExcursions.map((excursion, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 md:mx-4">
            <div id="default-carousel" className="relative w-full z-40" data-carousel="slide">
              {/* Carousel wrapper */}
              <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 overflow-hidden rounded-t-lg">
                {excursion.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="duration-500 ease-in-out inset-0 w-full h-full"
                    data-carousel-item
                  >
                    <Image
                      alt={image.alt}
                      src={image.url}
                      fill
                      sizes="(max-width: 500px)"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{excursion.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{excursion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
