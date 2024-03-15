/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';


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
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('active', ['&:active', '&.router-link-active'])
    })
  ],
}

