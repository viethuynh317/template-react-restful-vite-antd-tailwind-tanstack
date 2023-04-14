import { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

import './configs/i18n';

import { form, theme } from './configs/antd';
import { ILanguage } from './configs/i18n/type';
import Routes from './routes/Routes';
import { initialState, reducer, StoreContext } from './shared/hooks/useStore';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { i18n } = useTranslation();
	const language = i18n?.language;

	return (
		<ConfigProvider theme={theme} form={form?.[language as ILanguage]}>
			<StyleProvider hashPriority="high">
				<StoreContext.Provider value={{ state, dispatch }}>
					<Routes />
				</StoreContext.Provider>
			</StyleProvider>
		</ConfigProvider>
	);
}

export default App;
