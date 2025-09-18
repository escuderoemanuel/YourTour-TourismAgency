export const generateMetadata = ({ params }) => {
  const baseUrl = 'https://yourtour.ar';
  const currentLang = params.locale;

  return {
    title: `Excursions - YourTour`,
    alternates: {
      canonical: `${baseUrl}/${currentLang}/excursions`
    }
  };
};
