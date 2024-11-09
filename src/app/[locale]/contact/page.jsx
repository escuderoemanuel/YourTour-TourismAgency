'use client';

import ContactForm from '@/components/ContactForm/ContactForm';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const imageContact = '/img/contact3.svg';

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <h1 className="custom-title">{t('h1')}</h1>
      <h2 className="sr-only">{t('h2')}</h2>
      <div className="flex flex-col mt-12 items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center">
        <Image
          className="mb-8 w-44 md:w-64 h-auto lg:w-80 md:mb-12 lg:mr-12 lg:mt-12"
          src={imageContact}
          alt="Persona enviando email"
          width={100}
          height={100}
          quality={100}
          loading="lazy"
        />
        <ContactForm
          EmailAddress={t('email')}
          FirstName={t('firstName')}
          LastName={t('lastName')}
          PhoneNumber={t('phoneNumber')}
          PaxQuantity={t('paxQuantity')}
          Message={t('message')}
          TermsText1={t('termsText1')}
          TermsText2={t('termsText2')}
          SubmitText={t('submitText')}
        />
      </div>
    </section>
  );
}
