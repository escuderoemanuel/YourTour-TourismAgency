'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { raleway } from '@/ui/fonts';


/* Content */
export default function Terms() {
  const t = useTranslations('TermsPage')

  // 'raw' obtiene los datos anidados sin que sean procesados como una cadena JSON
  const listTerms = t.raw('listTerms');

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-10">

      <div className="flex flex-col text-primary-color">
        <h1 className={`custom-title ${raleway.className} text-center uppercase underline mb-2 md:mb-4 lg:mb-6`}>{t('h1')}</h1>
        <h2 className="sr-only">{t('h2')}</h2>
        {/* Terms */}
        {Object.values(listTerms).map((term, index) => (
          <div key={index}>
            <h3 className="font-bold">{term.term}</h3>
            <p className="mb-4" >{term.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
