/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#252525',
        'white-green': '#f0fce9',
        'pear': '#f4f2ec',
        'gray-fill': '#252525',
        'black-transparent': 'rgba(0, 0, 0, 0.7)'
      },
      screens: {
        'max-1250': {'max': '1250px'},
        'max-1090': {'max': '1090px'},
        'max-990': {'max': '990px'},
        'max-520': {'max': '520px'},
        'max-450': {'max': '450px'},
        'max-750': {'max': '750px'},
        'max-650': {'max': '650px'},
        'max-400': {'max': '400px'},
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/image/background.jpg')",
      },
      flex: {
        '30': '1 1 30rem'
      },
      spacing: {
        '0.25': "1px",
        '450': "450px",
        '500': "500px",
        '600': "600px",
        '650': "650px",
        '80': '80vh',
        '8/10': '80%',
      },
      boxShadow: {
        'top': '0 0 5px rgba(0, 0, 0, .3)',
        'all': '0px 5px 16px -3px rgba(0, 0, 0, 0.2)',
        'inner-bottom': 'inset 0 -5px 0px 0px rgb(250, 250, 250, 0.7)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
      lineClamp: {
        7: '7',
      },
    },
  },
  plugins: [],
}

