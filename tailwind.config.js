const tailwindcss = require('tailwindcss');

const primary = {
  DEFAULT: '#595CFF',
  600:'#595cffd4',
  400:'#595cff94',
  200:'#595cff47',
  100:'#595cff33'
}
const firstBg = {
  DEFAULT: '#F5F5F5',
}
const secondBg = {
  DEFAULT: '#e6c10f',
}
const danger = {
  DEFAULT: '#D85252',
}
const secondary = {
  DEFAULT: '#e6c10f',
}
const textColor = {
  DEFAULT: '#707070',
}
const navText = {
  DEFAULT: '#777',
}
module.exports = {
  // content: [
  //   './index.html',
  //   './src/**/*.{vue,js,ts,jsx,tsx}',  
  //   './node_modules/vue-tailwind-datepicker/**/*.js',
  // ],
  theme: {
    extend: {
      colors: {
        primary,
        secondBg,
        firstBg,
        danger,
        textColor,
        secondary,
        navText
      },
    },
  },
  content: ['./public/**/*.html', './src/**/*.vue', './src/main.js'],

  plugins: [
    tailwindcss,
    
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

}