'use client'
import 'flowbite';
import { praise } from '../ui/fonts';
import Carousel from '@/components/Carousel/Carousel';
import content from '../translations/es/global.json';


export default function Page() {

  return (
    <section className="min-h-screen py-10 px-16 align-middle">
      <h1 className="text-xl font-bold mb-10 text-center uppercase">
        {content.home.titleHome}
      </h1>

      <Carousel />

      <div className="py-6 px-6 text-lg mt-6">
        <p>
          En <span className={`text-2xl ${praise.className}`}>Your Tour</span> nos complace recibirlos en la puerta de entrada a las maravillas de <span className="font-bold">Mendoza, Argentina</span>.
          <br />
          Aquí, podrán descubrir una tierra donde la naturaleza, la cultura y la aventura se entrelazan para crear experiencias inolvidables.
          <br />
          Estamos dedicados a hacer de su visita una experiencia <span className="font-bold">única y personalizada</span>. Ya sea que busquen relajarse en un entorno sereno, vivir aventuras emocionantes o deleitarse con nuestra gastronomía y vinos, estamos aquí para ayudarlos a planificar el viaje perfecto.
          <br />
          ¡Descubran todo lo que <span className="font-bold">Mendoza</span> tiene para ofrecer con nosotros!
        </p>
      </div>
    </section>
  );
}
