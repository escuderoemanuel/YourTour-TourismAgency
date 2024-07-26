'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Excursions() {
  const t = useTranslations('ExcursionsPage');

  // 'raw' obtiene los datos anidados sin que sean procesados como una cadena JSON
  const excursionsData = t.raw('listExcursions');
  const listExcursions = Object.values(excursionsData).map(excursion => ({
    title: excursion.title,
    description: excursion.description,
    images: Object.values(excursion.listImages)
  }));

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <h1 className="sr-only">{t('h1')}</h1>

      <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center">
        {listExcursions.map((excursion, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 md:mx-4">
            <ExcursionCarousel images={excursion.images} />
            <div className="p-5">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{excursion.title}</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{excursion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExcursionCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative w-full z-40">
      {/* Carousel wrapper */}
      <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 overflow-hidden rounded-t-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-300 ease-in-out absolute inset-0 w-full h-full transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              alt={image.alt}
              src={image.url}
              fill
              sizes="(max-width: 500px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={100} // Ajusta la calidad a 100
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
