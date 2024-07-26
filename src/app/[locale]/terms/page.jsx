'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations('TermsPage')

  // 'raw' obtiene los datos anidados sin que sean procesados como una cadena JSON
  const listTerms = t.raw('listTerms');

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="sr-only">{t('h1')}</h1>

      <div className="flex flex-col text-primary-color">
        <h2 className="font-bold text-center uppercase mb-2 md:mb-4 lg:mb-6">{t('title')}</h2>
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
