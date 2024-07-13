'use client';

import { praise } from '../ui/fonts';
import content from '../translations/es/global';

import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';

export default function Home() {
  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14">
      <HomeCarousel />
      <div className="py-2 sm:px-2 md:py-4 md:px-4 text-lg mt-2 md:mt-6">
        <p>
          <span  >{content.home.paragraph1}</span>
          <span className={`text-2xl me-1 ${praise.className}`}> {content.home.span} </span>
          <span  >{content.home.paragraph2}</span>
          <span className={`text-2xl ${praise.className}`}> {content.home.spanFinal} </span>
        </p>
      </div>
    </section>
  );
}
