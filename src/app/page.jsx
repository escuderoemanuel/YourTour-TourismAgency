import { praise } from '../ui/fonts';


export default function Page() {

  return (
    <section className={`min-h-screen py-10 px-16  align-middle`}>
      <h1 className={` text-xl font-regular mb-10 text-center`}>  Bienvenidos a <span className={`text-3xl ${praise.className}`}>Your Tour</span> </h1>

      {/* CAROUSEL */}
      <div id="default-carousel" className="relative w-full z-40" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="imageCarousel relative h-56 overflow-hidden rounded-lg md:h-500px">
          {/* Item 1 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="https://vuelteando.com/wp-content/uploads/2021/04/IMG_6390.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Portones del Parque General San Martín en la ciudad de Mendoza" />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/public/img/cacheuta.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 3  */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/public/img/Cañon-del-Atuel-1024x562.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/public/img/laguna-diamante.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/public/img/montanas.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/130 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/130 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className={`py-6 px-6 text-lg mt-6`}>
        <p className={``}>
          En <span className={`text-2xl ${praise.className}`}>Your Tour</span> nos complace recibirlos en la puerta de entrada a las maravillas de <span className={`font-bold`}>Mendoza, Argentina</span>.
          <br />
          Aquí, podrán descubrir una tierra donde la naturaleza, la cultura y la aventura se entrelazan para crear experiencias inolvidables.
          <br />
          Estamos dedicados a hacer de su visita una experiencia <span className={`font-bold`}>única y personalizada</span>. Ya sea que busquen relajarse en un entorno sereno, vivir aventuras emocionantes o deleitarse con nuestra gastronomía y vinos, estamos aquí para ayudarlos a planificar el viaje perfecto.
          <br />
          ¡Descubran todo lo que <span className={`font-bold`}>Mendoza</span> tiene para ofrecer con nosotros!
        </p>
      </div>
    </section>
  );
}
