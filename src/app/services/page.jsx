import React from 'react';
import content from '../../translations/es/global.json';
import CardService from '@/components/CardService/CardService';

const Services = () => {
  const listServices = Object.values(content.services.listServices);

  return (
    <section className={`min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14`}>
      <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center'>
        {listServices.map((service, index) => (
          <CardService
            key={index}
            title={service.title}
            description={service.description}
            src={service.image.url}
            alt={service.image.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
