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
        error: '#ff6771',
        button1: '#1818e2',
        button3: '#0a6b0a',
        button4: '#ce0808',
        button5: '#c5c515',
        button6: '#800080',



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

      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

