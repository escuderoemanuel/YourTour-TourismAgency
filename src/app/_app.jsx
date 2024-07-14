// src/app/_app.jsx
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import '../i18n';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
