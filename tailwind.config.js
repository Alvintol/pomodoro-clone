/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './src/*.jsx',
    './src/components/*.tsx',
    './dist/*.jsx',
    './dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#d6e6ff',
        'lightBlue': '#d7f9f8',
        'yellow': '#ffffea',
        'orange': '#fff0d4',
        'pink': '#fbe0e0',
        'purple': '#e5d4ef', 
      }
    },
    screens: {
      xs: '320px',
      sm: '420px',
      md: '768px',
      lg: '976px',
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
