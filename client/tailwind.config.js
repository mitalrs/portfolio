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
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }, // light theme layout tokens
          colors: {
            background: '#c7afde',
            foreground: '#000',
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
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#F182F6'
          } // light theme colors
        },
        dark: {
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }, // dark theme layout tokens
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#e9fedf',
              100: '#ccf8b7',
              200: '#b1f28b',
              300: '#96ec5e',
              400: '#80e732',
              500: '#5bcd18',
              600: '#3ca010',
              700: '#227208',
              800: '#0d4502',
              900: '#001803',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#F182F6'
          } // dark theme colors
        },
      }
    })
  ],
}

