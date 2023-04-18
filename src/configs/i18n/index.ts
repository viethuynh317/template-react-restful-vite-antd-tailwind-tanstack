/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enLocale from './locales/en.json';
import viLocale from './locales/vi.json';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		lng: 'en',
		resources: {
			vi: {
				translation: viLocale,
			},
			en: {
				translation: enLocale,
			},
		},
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
