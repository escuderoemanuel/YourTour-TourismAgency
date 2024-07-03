'use client'
import 'flowbite';
import { praise, inter } from '../ui/fonts';
import Carousel from '@/components/Carousel/Carousel';
import content from '../translations/es/global.json';


export default function Home() {

  return (
    <section className="min-h-screen py-10 px-16 align-middle">
      <h1 className="text-xl font-bold mb-10 text-center uppercase">
        {content.home.titleHome}
      </h1>

      <Carousel />

      <div className="py-6 px-6 text-lg mt-6">
        <p>
          <span dangerouslySetInnerHTML={{ __html: content.home.paragraphHome1 }}></span>
          <span className={`text-2xl me-1 ${praise.className}`}> {content.home.spanHome} </span>
          <span dangerouslySetInnerHTML={{ __html: content.home.paragraphHome2 }}></span>
          <span className={`text-2xl ${praise.className}`}> {content.home.spanHomeFinal} </span>
        </p>

      </div>
    </section>
  );
}
