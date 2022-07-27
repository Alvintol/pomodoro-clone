/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './src/*.jsx',
    './src/components/*.jsx'
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
