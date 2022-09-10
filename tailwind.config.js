/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir-Next-LT-Pro-Regular',...defaultTheme.fontFamily.sans],
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        kusanagi: ['Kusanagi'],
        avenir: ['Avenir-Next-LT-Pro-Regular'],
        avenirBold: ['Avenir-Next-LT-Pro-Bold']
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
