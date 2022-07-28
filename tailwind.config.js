/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './src/*.jsx',
    './src/components/*.jsx',
    './dist/*.jsx',
    './dist/*.js',
  ],
  theme: {
    extend: {},
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
