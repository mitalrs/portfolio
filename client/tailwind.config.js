/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        primary: {
          50: '#ffe2e7',
          100: '#ffb3bb',
          200: '#fc8393',
          300: '#f9526d',
          400: '#f6224b',
          500: '#dd0939',
          600: '#ad0320',
          700: '#7c000e',
          800: '#4d0002',
          900: '#200400',
        },
        success: {
          50: '#e1ffde',
          100: '#b8fdb1',
          200: '#90fa82',
          300: '#6cf852',
          400: '#4af622',
          500: '#37dd09',
          600: '#1dac03',
          700: '#0b7b00',
          800: '#004b04',
          900: '#001b07',
        },
        background: '#ffffff', // White background for light mode
      },
      dark: {
        primary: {
          50: '#ffe2e7',
          100: '#ffb3bb',
          200: '#fc8393',
          300: '#f9526d',
          400: '#f6224b',
          500: '#dd0939',
          600: '#ad0320',
          700: '#7c000e',
          800: '#4d0002',
          900: '#200400',
        },
        success: {
          50: '#e1ffde',
          100: '#b8fdb1',
          200: '#90fa82',
          300: '#6cf852',
          400: '#4af622',
          500: '#37dd09',
          600: '#1dac03',
          700: '#0b7b00',
          800: '#004b04',
          900: '#001b07',
        },
        background: '#000000', // Black background for dark mode
      },
    },
  })],
}

