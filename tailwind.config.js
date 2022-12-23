/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'inner-light': 'inset 0px -12px 60px 10px rgba(0,0,0,0.3)',
				'inner-dark': 'inset 0px -12px 60px 10px rgba(0,0,0,0.9)',
			},
			borderWidth: {
				'1': '1px',
			},
		},
	},
	plugins: [],
}
