'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HomeCarousel() {
  const t = useTranslations('HomePage');

  // Flowbite requiere useEffect para inicializar en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite');
    }
  }, []);

  // Obtén las imágenes del homeCarousel
  const carouselImages = t.raw('homeCarousel');
  const imagesArray = Object.values(carouselImages);

  return (
    <>
      {/* CAROUSEL */}
      <div id="default-carousel" className="relative w-full z-40" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 overflow-hidden rounded-lg">
          {imagesArray.map((image, index) => (
            <div key={index} className="duration-700 ease-in-out absolute inset-0 w-full h-full" data-carousel-item>
              <Image
                alt={image.alt}
                src={image.url}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                quality={100}
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {imagesArray.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
