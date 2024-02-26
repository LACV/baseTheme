/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-secondary)',
        neutral: '#030707',
        info: '#009aff',
        success: '#00d492',
        warning: '#cf9900',
        error: 'var(--color-danger)',
        purple: '#800080',
        customGlow: 'var(--glow)',
        customHue: 'var(--hue)',

        white:{
          DEFAULT: '#fff',  
          dark: '#f5f5f5',  
        },

        gray: {
          50: 'var(--color-gray-50-dark)',
          100: 'var(--color-gray-100-dark)',
          200: 'var(--color-gray-200-dark)',
          300: 'var(--color-gray-300-dark)',
          400: 'var(--color-gray-400-dark)',
          500: 'var(--color-gray-500-dark)',
          600: 'var(--color-gray-600-dark)',
          700: 'var(--color-gray-700-dark)',
          800: 'var(--color-gray-800-dark)',
          900: 'var(--color-gray-900-dark)',
          },

        spacing: {
          'customSize': 'var(--size)',
      },
      backgroundSize: {
        'customGlow': 'var(--size) var(--size)'
      },
      backgroundPosition: {
        'customPosition': 'calc((var(--x) * 1px) - (var(--size) * 0.5)) calc((var(--y) * 1px) - (var(--size) * 0.5))'
      }

      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

