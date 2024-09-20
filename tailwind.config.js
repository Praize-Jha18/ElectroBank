/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      
          sans: ['Roboto', 'sans-serif'],
      },
      screens:{
        'max-mdLap': {'max': '996px'},
        'max-tab': {'max': '778px'},
        'max-mdPhone': {'max': '550px'},
        'max-phone': {'max': '426px'},
  }
    },
  },
  plugins: [],
}

