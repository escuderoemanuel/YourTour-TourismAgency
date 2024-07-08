'use client';
import React from 'react';
import Image from 'next/image';
import 'flowbite';

const CardCarousel = ({ images }) => {
  return (
    <div id="default-carousel" className="relative w-full z-40" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-t-lg">
        {images.map((image, index) => (
          <div key={index} className="duration-700 ease-in-out" data-carousel-item>
            <Image
              alt={image.alt}
              src={image.url}
              width={500}
              height={500}
              quality={100}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
