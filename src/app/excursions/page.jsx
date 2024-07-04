import React from 'react'
import Image from 'next/image'
import content from '../../translations/es/global.json'

export default function excursions() {
  const listExcursions = Object.values(content.excursions.listExcursions)
  return (
    <section className={`min-h-screen md:flex md:flex-wrap md:items-center md:justify-center`}>
      <h2 className="text-xl font-bold mb-2 md:mb-10 md:mt-2 text-center uppercase">{content.excursions.title} </h2>

      {
        listExcursions.map((excursion, index) => (
          <div key={index} className="items-center mb-8  md:flex md:mb-12 lg:max-w-5xl md:translate-x-4">
            <Image
              alt={excursion.image.alt}
              src={excursion.image.url}
              width={1080}
              height={920}
              quality={100}
              className={`h-auto md:w-72 rounded-lg md:z-30 md:max-h-56`} />
            <div className={`md:bg-stone-200  md:-translate-x-8 md:h-auto md:rounded-lg md:pl-8 md:border md:border-neutral-400 md:z-20 md:h-56`}>
              <h3 className="px-2 pt-2 text-lg font-bold">{excursion.title}</h3>
              <p className='px-2 py-2'>{excursion.description}
              </p>
            </div>
          </div>
        ))
      }
    </section >
  )
}
