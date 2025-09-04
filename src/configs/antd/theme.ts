import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
	token: {
		// Primary colors
		colorPrimary: '#1677ff',
		colorSuccess: '#52c41a',
		colorWarning: '#faad14',
		colorError: '#ff4d4f',
		colorInfo: '#1677ff',

		// Layout
		borderRadius: 6,
		wireframe: false,

		// Font
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
		fontSize: 14,

		// Spacing
		sizeStep: 4,
		sizeUnit: 4,

		// Motion
		motionDurationFast: '0.1s',
		motionDurationMid: '0.2s',
		motionDurationSlow: '0.3s',
	},
	components: {
		Button: {
			borderRadius: 6,
			controlHeight: 32,
		},
		Input: {
			borderRadius: 6,
			controlHeight: 32,
		},
		Select: {
			borderRadius: 6,
			controlHeight: 32,
		},
		Card: {
			borderRadius: 8,
		},
		Modal: {
			borderRadius: 8,
		},
		Drawer: {
			borderRadius: 8,
		},
		Notification: {
			borderRadius: 8,
		},
		Message: {
			borderRadius: 8,
		},
		Menu: {
			borderRadius: 6,
		},
		Table: {
			borderRadius: 6,
		},
	},
	algorithm: [], // Can add theme.darkAlgorithm for dark mode
};

export const darkTheme: ThemeConfig = {
	...theme,
	algorithm: [], // Add dark algorithm when needed
};

export default theme;
