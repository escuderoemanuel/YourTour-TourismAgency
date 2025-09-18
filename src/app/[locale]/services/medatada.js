export const generateMetadata = ({ params }) => {
  const baseUrl = 'https://yourtour.ar';
  const currentLang = params.locale;

  return {
    title: `Services - YourTour`,
    alternates: {
      canonical: `${baseUrl}/${currentLang}/services`
    }
  };
};
