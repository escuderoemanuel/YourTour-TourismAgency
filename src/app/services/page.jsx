import React from 'react'
import content from '../../translations/es/global.json'
import Card from '@/components/Card/Card'


export default function services() {
  const listServices = Object.values(content.services.listServices)
  return (
    <section className={`min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14`}>

      <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center'>
        {
          listServices.map((service, index) => (
            <Card
              key={index}
              alt={service.image.alt}
              src={service.image.url}
              title={service.title}
              description={service.description}
            />
          ))
        }
      </div>
    </section >
  )
}
