'use client';

import 'flowbite';
import { praise } from '../ui/fonts';
import HomeCarousel from '@/components/Carousel/Carousel';
import content from '../translations/es/global.json';

export default function Home() {
  return (
    <section className="max-w-screen-lg mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-14">
      <HomeCarousel />
      <div className="py-2 sm:px-2 md:py-4 md:px-4 text-lg mt-2 md:mt-6">
        <p>
          <span dangerouslySetInnerHTML={{ __html: content.home.paragraph1 }} />
          <span className={`text-2xl me-1 ${praise.className}`}> {content.home.span} </span>
          <span dangerouslySetInnerHTML={{ __html: content.home.paragraph2 }} />
          <span className={`text-2xl ${praise.className}`}> {content.home.spanFinal} </span>
        </p>
      </div>
    </section>
  );
}
