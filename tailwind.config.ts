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
				gray: '#575757',
			},
			backgroundColor: {
				menu: '#146586',
			},
		},
	},
	plugins: [],
};
export default config;
