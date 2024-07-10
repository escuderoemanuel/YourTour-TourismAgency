'use client';
import React from 'react';
import Image from 'next/image';

const CardCarousel = ({ images }) => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-t-lg">
        {images.map((image, index) => (
          <div key={index} className="duration-700 ease-in-out" data-carousel-item>
            <Image
              alt={image.alt}
              src={image.url}
              width={500}
              height={500}
              quality={100}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
