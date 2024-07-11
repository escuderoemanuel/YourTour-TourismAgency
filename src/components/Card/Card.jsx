"use client"
import Image from 'next/image';
import React from 'react';
import 'flowbite';


const Card = ({ images, title, description }) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 md:mx-4">

      {/* CAROUSEL */}
      <div id="default-carousel" className="relative w-full z-40" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 overflow-hidden rounded-t-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className="duration-500 ease-in-out inset-0 w-full h-full"
              data-carousel-item
            >
              <Image
                alt={image.alt}
                src={image.url}
                fill
                sizes="(max-width: 500px)"
                style={{ objectFit: 'cover' }}
                quality={100}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>




      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Card;
