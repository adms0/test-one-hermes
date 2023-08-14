import i18n from 'i18next';
import { initreacti18next } from 'react-i18next';

import backend from 'i18next-xhr-backend';
import languagedetector from 'i18next-browser-languagedetector';


i18n
  .use(backend)
  .use(languagedetector)
  .use(initreacti18next)
  .init({
    fallbacklng: 'en',
    debug: true,

    interpolation: {
      escapevalue: false,
    }
  });
export default i18n;