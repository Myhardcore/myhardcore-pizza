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
            'lovely-gray': '#FBF6EF',
          },
            cursor: {
                'fancy': 'url(/cursor.svg), pointer',
            },
            keyframes: {
              'slide': {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' },
              }
            },
            animation: {
              'slide': 'slide 35s infinite linear',
            }
        },
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('active', ['&:active', '&.router-link-active'])
        }),
       
    ]
}

