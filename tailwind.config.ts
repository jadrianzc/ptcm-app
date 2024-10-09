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
				gray5: '#A5AAAD',
				gray6: '#666666',
				gray7: '#89898E',
				main: '#3F6380',
				blue: '#146586',
				skyBlue: '#C7D9E0',
				turquoise: '#43849E',
				green: '#1D9159',
			},
			backgroundColor: {
				content: '#F7F7F7',
				gray: '#F8F8F8',
				gray2: '#C7C6CB',
				tableContent: '#F9F9F9',
				red: '#D14747',
				green: '#609D56',
				greenLight: '#5ABB95',
				blue: '#146586',
				blueTra: '#1465860D',
				turquoise: '#43849E',
				darkblue: '#0E5373',
			},
			borderColor: {
				blue: '#146586',
				gray2: '#DCDDDF',
				gray3: '#6D6D6D',
				gray4: '#B2B2B2',
				gray5: '#707070',
				gray6: '#EEEEF3',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
export default config;
