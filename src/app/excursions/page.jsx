import React from 'react';
import content from '../../translations/es/global.json';
import Card from '@/components/Card/Card';

const Excursions = () => {
  const listExcursions = Object.values(content.excursions.listExcursions).map(excursion => ({
    title: excursion.title,
    description: excursion.description,
    images: Object.values(excursion.listImages)
  }));

  return (
    <section className={`min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14`}>
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center'>
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
