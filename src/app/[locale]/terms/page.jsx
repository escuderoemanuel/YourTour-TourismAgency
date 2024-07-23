'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations('TermsPage')
  const listTerms = Object.values(t('listTerms'));

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14">
      <div className="flex flex-col">
        <h1 className="font-bold text-center uppercase mb-2 md:mb-4 lg:mb-6">{t('title')}</h1>
        {/* Terms */}
        {listTerms.map((term, index) => (
          <div key={index}>
            <h2 className="font-bold">{term.term}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: term.text }}></p>
          </div>
        ))}
      </div>
    </section>
  );
}
