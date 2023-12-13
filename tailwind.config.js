/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      
      },
    },
    extend: {
      colors: {
        'primary-500': 'rgb(59 130 246)',
        'primary-600': 'rgb(37 99 235)',
        'secondary-500': 'rgb(91 33 182)',
        'off-white': 'rgb(254 243 199)',
        'red': 'rgb(69 10 10)',
        'dark-1': 'rgb(31 41 55)',
        'dark-2': 'rgb(75 85 99)',
        'dark-3': 'rgb(3 7 18)',
        'dark-4': '#rgb(2 6 23)',
        'light-1': 'rgb(209 213 219)',
        'light-2': 'rgb(229 231 235)',
        'light-3': 'rgb(243 244 246)',
        'light-4': 'rgb(249 250 251)',
      },
      screens: {
        'xs': '480px',
      
      },
      width: {
        '420': '435px',
        '465': '300px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};