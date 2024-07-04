'use client'
import 'flowbite';
import { praise, raleway } from '../ui/fonts';
import Carousel from '@/components/Carousel/Carousel';
import content from '../translations/es/global.json';


export default function Home() {

  return (
    <section className="min-h-screen align-middle p-4 sm:p-6 md:p-8 lg:p-14">

      <Carousel />

      <div className="py-2 sm:px-2 md:py-4 md:px-4 text-lg mt-2 md:mt-6">
        <p>
          <span dangerouslySetInnerHTML={{ __html: content.home.paragraph1 }}></span>
          <span className={`text-2xl me-1 ${praise.className}`}> {content.home.span} </span>
          <span dangerouslySetInnerHTML={{ __html: content.home.paragraph2 }}></span>
          <span className={`text-2xl ${praise.className}`}> {content.home.spanFinal} </span>
        </p>

      </div>
    </section>
  );
}
