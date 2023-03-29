const tailwindcss = require('tailwindcss');

const primary = {
  DEFAULT: '#595CFF',
}
const firstBg = {
  DEFAULT: '#F5F5F5',
}
const secondBg = {
  DEFAULT: '#e6c10f',
}
const danger = {
  DEFAULT: '#FF5858',
}
const secondary = {
  DEFAULT: '#e6c10f',
}
const textColor = {
  DEFAULT: '#707070',
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
        secondary
      },
    },
  },
  content: ['./public/**/*.html', './src/**/*.vue', './src/main.js'],

  plugins: [
    tailwindcss,
    
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

}