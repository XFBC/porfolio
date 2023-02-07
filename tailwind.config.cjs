/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx, jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradientText:
          'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);',
        gradientBar:
          'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)'
      },

      borderColor: {
        gradientBar:
          '#AE67FA'
      }
    }
  },
  plugins: []
}
