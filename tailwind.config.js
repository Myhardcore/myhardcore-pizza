/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'


export default {
    
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
          colors: {
            'pinky-pink': '#DA1D3A',
            'pinky-dark': '#C91F37',
            'blacky-black': '#252D25',
            'lovely-gray': '#CED6DE',
          },
        },
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('active', ['&:active', '&.router-link-active'])
        })
    ]
}

