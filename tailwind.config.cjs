/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      aspectRatio: {
        '21/9': '21 / 9',
      },
    }
  },
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
}

