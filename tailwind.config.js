/** @type {import('tailwindcss').Config} */
export default {
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
        secondary : 'var(--color-secondary)',
        accent :'var(--color-secondary)',
        neutral: '#030707',         
        info: '#009aff',
        success: '#00d492',       
        warning: '#cf9900',        
        error: '#ff6771',
        coolGray:{
            dark: {
              50:'#111827',
              100:'#1F2937',
              200:'#374151',
              300:'#4B5563',
              400:'#6B7280',
              500:'#9CA3AF',
              600:'#D1D5DB',
              700:'#E5E7EB',
              800:'#F3F4F6',
              900:'#F9FAFB',
            },
        }

      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

