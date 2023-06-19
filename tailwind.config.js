/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#2D3CC2',
      greyF6: '#f6f6f7',
      greyEd: '#ededed',
      grey999: '#999',
      greyFb: '#FBFBFB',
      grey18: '#18181B',
      green: '#12B76A'
    },
    extend: {
      gap: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem'
      },
      boxShadow: {
        default: '0px 4px 4px rgba(0, 0, 0, 0.25'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '& > *')
    })
  ]
}
