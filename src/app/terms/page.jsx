import React from 'react'
import content from '../../translations/es/global.json'

export default function terms() {
  const terms = content.termsAndConditions
  const listTerms = Object.values(content.termsAndConditions.listTerms)

  return (
    <section className={`max-w-screen-lg mx-auto min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14`}>

      <div className='flex flex-col'>
        <h1 className='font-bold text-center uppercase mb-2 md:mb-4 lg:mb-6'>{terms.title}</h1>
        {/* Terms */}
        {
          listTerms.map((term, index) => (
            <div key={index}>
              <h2 className='font-bold items-start'>{term.term}</h2>
              <p className='mb-4' dangerouslySetInnerHTML={{ __html: term.text }}></p>
            </div>
          ))
        }
      </div>
    </section >
  );
}
