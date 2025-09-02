/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		darkMode: ['selector', '[data-mode="dark"]'],
		extend: {
			aspectRatio: {
				'21/9': '21 / 9'
			},
			animation: {
				text: 'text 7s ease infinite',
				'bg-pan': 'bg-pan 10s ease infinite'
			},
			keyframes: {
				text: {
					'0%': {
						'background-size': '150% 150%'
					},
					'50%': {
						'background-size': '100% 100%'
					},
					'100%': {
						'background-size': '150% 150%'
					}
				},
				'bg-pan': {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					'100%': {
						'background-position': '0% 0%'
					}
				}
			}
		}
	},
	// Make sure Tailwind scans all Svelte components, including src/lib
	content: ['./src/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['luxury']
	}
};
