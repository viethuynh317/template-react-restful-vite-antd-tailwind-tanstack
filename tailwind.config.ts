
import { join } from 'path';
import { ThemeConfig } from 'tailwindcss/types/config';

/** @type {import('tailwindcss').Config} */
export const content = [join(__dirname, 'src/**/*.{ts,tsx}')];
export const theme: Partial<ThemeConfig> = {
	colors: {
		primary: 'var(--primary-color)',
		secondary: 'var(--secondary-color)'
	},
};
export const plugins = [];

