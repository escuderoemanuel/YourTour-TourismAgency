import React from 'react';
import content from '../../translations/es/global.json';
import Card from '@/components/Card/Card';

const Excursions = () => {
  const listExcursions = Object.values(content.excursions.listExcursions).map(excursion => ({
    title: excursion.title,
    description: excursion.description,
    images: Object.values(excursion.listImages)
  }));

  const listServices = Object.values(content.services.listServices).map(service => ({
    title: service.title,
    description: service.description,
    images: Object.values(service.listImages)
  }));

  return (
    <section className={`max-w-screen-lg mx-auto min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl`}>
      <div className='flex flex-col mx-auto items-center md:items-stretch  md:flex-row md:flex-wrap md:justify-center'>
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

export default Excursions;
