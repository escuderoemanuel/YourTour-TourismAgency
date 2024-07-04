import React from 'react'
import Image from 'next/image'
import content from '../../translations/es/global.json'
import Card from '@/components/Card/Card'

export default function excursions() {
  const listExcursions = Object.values(content.excursions.listExcursions)
  return (
    <section className={`min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14`}>

      <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center'>
        {
          listExcursions.map((excursion, index) => (
            <Card
              key={index}
              alt={excursion.image.alt}
              src={excursion.image.url}
              title={excursion.title}
              description={excursion.description}
            />
          ))
        }
      </div>
    </section >
  )
}
