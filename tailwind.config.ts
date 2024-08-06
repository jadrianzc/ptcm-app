import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			textColor: {
				title: '#575755',
				gray: '#A5AAAD',
				gray2: '#393939',
				gray3: '#6D6D6D',
				gray4: '#B2B2B2',
				main: '#3F6380',
				blue: '#146586',
				skyBlue: '#C7D9E0',
				green: '#1D9159',
			},
			backgroundColor: {
				content: '#F7F7F7',
				tableContent: '#F9F9F9',
				red: '#D14747',
				green: '#609D56',
				blue: '#146586',
				blueTra: '#1465860D',
				turquoise: '#43849E',
				darkblue: '#0E5373',
			},
			borderColor: {
				blue: '#146586',
				gray3: '#6D6D6D',
				gray4: '#B2B2B2',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
export default config;
