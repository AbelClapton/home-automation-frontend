/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				glow: '0px 3px 6px 6px, inset 0px 3px 6px 3px',
			},
		},
	},
	plugins: [],
}
