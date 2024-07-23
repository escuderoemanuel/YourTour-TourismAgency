'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HomeCarousel() {
  const t = useTranslations('HomePage');

  // Obtén las imágenes del homeCarousel
  const carouselImages = t.raw('homeCarousel');
  const imagesArray = Object.values(carouselImages);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [imagesArray.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="custom-carousel" className="relative w-full z-40">
      {/* Carousel wrapper */}
      <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 overflow-hidden rounded-lg">
        {imagesArray.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 w-full h-full transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              alt={image.alt}
              src={image.url}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (min-width: 1025px) 100vw"
              quality={100} // Ajusta la calidad a 100
              style={{ objectFit: 'cover' }}
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
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
