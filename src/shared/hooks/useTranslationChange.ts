import { useTranslation } from 'react-i18next';

import { ILanguage } from '../../configs/i18n/type';

export default function useTranslationChange() {
	const { i18n } = useTranslation();
	return {
		async changeLanguage(lang: ILanguage) {
			try {
				await i18n.changeLanguage(lang);
			} catch (error) {
				/* empty */
			}
		},
	};
}
