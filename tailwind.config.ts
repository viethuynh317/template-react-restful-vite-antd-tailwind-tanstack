import { join } from 'path';
import { ThemeConfig } from 'tailwindcss/types/config';

/** @type {import('tailwindcss').Config} */
export const content = [join(__dirname, 'src/**/*.{ts,tsx}')];
export const theme: Partial<ThemeConfig> = {
	colors: {
		primary: 'var(--primary-color)',
		secondary: 'var(--secondary-color)',
		tertiary: 'var(--tertiary-color)',
		white: 'var(--white-color)',
		gray: 'var(--gray-color)',
		blue: 'var(--blue-color)',
		red: 'var(--red-color)',
		green: 'var(--green-color)',
		neutral: 'var(--neutral-color)',
		'neutral-300': 'var(--neutral-300-color)' 
	},
};
export const plugins = [];
export const important = true;