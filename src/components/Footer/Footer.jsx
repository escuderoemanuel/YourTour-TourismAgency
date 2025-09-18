'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <section className={`flex flex-col pt-6 pb-2 px-4 lg:px-16 items-center justify-between bgFooter`}>

      {/* Owner */}
      <div className='flex flex-col items-center  gap-2 md:items-end md:flex-row md:justify-around md:w-full' >


        {/* Socials & Copy */}
        <div>
          {/* Socials */}
          <div className={`max-w-screen-xl flex justify-center items-center mb-2 gap-6 md:gap-4 md:justify-start`}>
            {/* Instagram */}
            <Link
              href={t('owner.instagram')}
              target='_blank'
              rel='noopener noreferrer'
              title='Instagram'
              aria-label='Instagram'
            >
              <Image
                className={`hover:origin-center hover:scale-x-110 ease-in-out duration-200`}
                src='/icons/instagram.png'
                width={24}
                height={24}
                alt="Instagram Icon"
                loading="lazy" />
            </Link>

            {/* Facebook */}
            <Link
              href={t('owner.facebook')}
              target='_blank'
              rel='noopener noreferrer'
              title='Facebook'
              aria-label='Facebook'
            >
              <Image
                className={`hover:origin-center hover:scale-x-110 ease-in-out duration-200`}
                src='/icons/facebook.png'
                width={24}
                height={24}
                alt="Facebook Icon"
                loading="lazy" />
            </Link>

            {/* Gmail */}
            <Link
              href={`mailto:{${t('owner.email')}}`}
              id='mailto'
              target='_blank'
              rel='noopener noreferrer'
              title='Gmail'
              aria-label='Gmail'
              className={`cursor-pointer`}
            >
              <Image
                className={`hover:origin-center hover:scale-x-110 ease-in-out duration-200`}
                src='/icons/gmail.png'
                width={24}
                height={24}
                alt="Gmail Icon"
                loading="lazy" />
            </Link>
          </div>

          {/* Copyright */}
          <Link
            className='sr-only text-xs text-secondary-color underline decoration-1 font-extralight'
            href={'/sitemap.xml'}
            target='_blank'
            rel='noopener noreferrer'>Sitemap</Link>
          <p className=' text-xs text-secondary-color'>
            {t('owner.copyright')}
          </p>
        </div>

        {/* Logo  */}
        <div className={`max-w-screen-xl flex justify-between items-center`}>
          <Image
            className={`w-48 h-auto my-4 md:w-56 md:my-0`}
            src={t('owner.logo.yourTourSecondaryLogo')}
            width={150}
            height={70}
            alt="Your Tour Logo"
            loading="lazy" />
        </div>



        {/* Copy & Address */}
        <div className='flex flex-col items-center md:items-end justify-between'>
          <Image
            className={`mb-1`}
            src='/icons/icons-gps.png'
            width={20}
            height={20}
            alt="Location Icon"
            loading="lazy" />

          <p className=' text-xs text-secondary-color text-center md:text-end'>{t('owner.address')}</p>
          <p className=' text-xs text-secondary-color text-center md:text-end'>{t('owner.city')}</p>
          <p className=' text-xs text-secondary-color text-center md:text-end'>{t('owner.state')}</p>

        </div>
      </div >

      {/* DEV */}
      <div className='max-w-screen-xl flex justify-between items-center gap-2 pt-8 md:pt-14 md:pb-1' >
        <p className='text-xs text-secondary-color opacity-90 text-center font-extralight'>{t('dev.paragraph')}</p>
        <Link
          href={t('dev.devUrl')}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            width={30}
            height={30}
            className={`w-5 h-auto hover:origin-center hover:rotate-12 hover:scale-x-110 ease-in-out duration-300`}
            src={t('dev.img.url')}
            alt={t('dev.img.alt')}
            loading="lazy"
          />
        </Link>
      </div >
    </section >
  );
};

