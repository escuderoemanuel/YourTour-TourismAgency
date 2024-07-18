'use client';

import ContactForm from '@/components/ContactForm/ContactForm';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const imageContact = '/img/contact3.svg';

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen flex flex-col items-center justify-center mt-0 p-4 sm:p-6 md:p-8 lg:p-14 lg:flex lg:flex-row lg:items-start lg:mt-16">
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
    </section>
  );
}
