import { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

import './configs/i18n';

import { form, theme } from './configs/antd';
import { validateEnvironment } from './configs/environment';
import { ILanguage } from './configs/i18n/type';
import Routes from './routes/Routes';
import ErrorBoundary from './shared/components/ErrorBoundary';
import { initialState, reducer, StoreContext } from './shared/hooks/useStore';

// Validate environment on app startup
try {
	validateEnvironment();
} catch (error) {
	console.error('Environment validation failed:', error);
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { i18n } = useTranslation();
	const language = i18n?.language;

	return (
		<ErrorBoundary>
			<ConfigProvider theme={theme} form={form?.[language as ILanguage]}>
				<StyleProvider hashPriority="high">
					<StoreContext.Provider value={{ state, dispatch }}>
						<Routes />
					</StoreContext.Provider>
				</StyleProvider>
			</ConfigProvider>
		</ErrorBoundary>
	);
}

export default App;
