module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'storm': '#3C4B4D',
        'sunshine': '#F2AB26',
        'orange': '#D87D0D',
        'denim' : '#14312A',
        'berry': '#73303C'
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
