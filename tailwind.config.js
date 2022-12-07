/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'NotoSansJP': ['Noto Sans JP', 'sans-serif']
      },
      outlineOffset:{
        '6': '6px'
      },
      outlineWidth:{
        '20': '20px'
      }
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
  content: ["./**/*.html"]
}
