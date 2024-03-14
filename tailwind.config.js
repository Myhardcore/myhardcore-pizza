/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'pinky-pink': '#DA1D3A',
        'blacky-black': '#252D25'
      }
    },
  },
  plugins: [],
}

