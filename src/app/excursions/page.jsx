import React from 'react';
// import content from '../../translations/es/global.json';
import excursions from '../../translations/es/excursions.json'
import Card from '@/components/Card/Card';

export default function Excursions() {

  const listExcursions = Object.values(excursions.listExcursions).map(excursion => ({
    title: excursion.title,
    description: excursion.description,
    images: Object.values(excursion.listImages)
  }));

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center">
        {listExcursions.map((excursion, index) => (
          <Card
            key={index}
            title={excursion.title}
            description={excursion.description}
            images={excursion.images}
          />
        ))}
      </div>
    </section>
  );
}
