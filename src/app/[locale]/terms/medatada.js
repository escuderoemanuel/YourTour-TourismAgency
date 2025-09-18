export const generateMetadata = ({ params }) => {
  const baseUrl = 'https://yourtour.ar';
  const currentLang = params.locale;

  return {
    title: `Terms - YourTour`,
    alternates: {
      canonical: `${baseUrl}/${currentLang}/terms`
    }
  };
};
