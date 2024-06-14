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
				orange: '#F98B15',
				stormBlue: '#3f7b91',
				gray: '#575757',
			},
			backgroundColor: {
				bone: '#EEEEEE',
				dark: '#353535',
			},
			borderColor: {
				gray: '#575757',
			},
		},
	},
	plugins: [],
};
export default config;
