export const generateMetadata = ({ params }) => {
  const baseUrl = 'https://yourtour.ar';
  const currentLang = params.locale;

  return {
    title: `Contact - YourTour`,
    alternates: {
      canonical: `${baseUrl}/${currentLang}/contact`
    }
  };
};
