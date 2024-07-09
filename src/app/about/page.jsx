import content from '../../translations/es/global.json'

export default function about() {
  return (
    <section className={`max-w-screen-lg mx-auto  min-h-screen align-middle bg-amber-400`}>
      <h2 className="text-xl font-bold mb-2 md:mb-10 md:mt-2 text-center uppercase">{content.about.title}</h2>
      <p>
        {content.about.paragraph}
      </p>
    </section>
  );
}