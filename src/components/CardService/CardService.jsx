import Image from 'next/image';
import React from 'react';

const CardService = ({ src, alt, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 md:mx-4">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="rounded-t-lg"
        objectFit="cover"
        layout="responsive"
        quality={100}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default CardService;
