/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      aspectRatio: {
        '21/9': '21 / 9',
      },
      animation: {
        text: 'text 7s ease infinite',
      },
      keyframes: {
        text: {
          "0%": {
            'background-size': '150% 150%',
          },
          "50%": {
            'background-size': '100% 100%',
          },
          "100%": {
            'background-size': '150% 150%',
          },
        },
      },
    }
  },
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}

