'use client';

import ContactForm from '@/components/ContactForm/ContactForm';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { raleway } from '@/ui/fonts';


const imageContact = '/img/contact3.svg';

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14 2xl:max-w-screen-2xl">
      <h1 className={`custom-title ${raleway.className}`}>{t('h1')}</h1>
      <h2 className="sr-only">{t('h2')}</h2>

      <div className="flex flex-col mt-4 items-center md:mt-8 lg:mt-10  md:items-stretch md:flex-row md:flex-wrap md:justify-center lg:justify-between xl:justify-around">
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
        <div className="">
          <div className="w-full h-full md:h-[400px] md:w-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18948.79973903328!2d-68.78027278724595!3d-32.90593540455613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0e80cf6eb7a9%3A0x6ef2dc2e7ba84f9b!2sCorrientes%201968%2C%20M5521%20Mendoza!5e0!3m2!1ses!2sar!4v1753021738551!5m2!1ses!2sar"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

    </section >
  );
}
