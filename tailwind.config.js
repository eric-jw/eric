module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'white': '#FAF8FF',
      'blue': '#0052FF',
      'yellow': '#FFAD00',
      'black': '#1C1A27',
    },
    backgroundImage: {
      'bg-bluegrad': 'radial-gradient(circle at 0 0,#3375FF 15%,  #0052FF 85%)',
      'bg-yellowgrad': 'radial-gradient(circle at 0 0,#FFBD33 15%,  #FFAD00 85%)',
    },
    extend: {
      //custom thing like textOpacityL=: ['dark']
    },
  },
  plugins: [],
}