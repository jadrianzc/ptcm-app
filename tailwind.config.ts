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
				main: '#3F6380',
				blue: '#146586',
			},
			backgroundColor: {
				content: '#F7F7F7',
				blue: '#146586',
				red: '#D14747',
				green: '#609D56',
				darkblue: '#0E5373',
			},
		},
	},
	plugins: [],
};
export default config;
