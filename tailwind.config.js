/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir-Next-LT-Pro', 'Inter var', ...defaultTheme.fontFamily.sans],
        avenir: ['Avenir-Next-LT-Pro'],
        kusanagi: ['Kusanagi']
      },
      fontSize: {
        '3.5xl': ['2.14rem', { lineHeight: '2.25rem' }],
        '4.5xl': ['2.8rem', { lineHeight: 1 }]
      },
      colors: {
        'kira-purple': {
          500: '#cb00ff',
          600: '#a002e9',
          700: '#632aa6'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
