import React from 'react';
import content from '../../translations/es/global.json';
import Card from '@/components/Card/Card';

const Services = () => {
  const listServices = Object.values(content.services.listServices).map(service => ({
    title: service.title,
    description: service.description,
    images: Object.values(service.listImages)
  }));

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center">
        {listServices.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            images={service.images}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
