/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'humble-black': '#1D1E1C',
        'pure-white': '#FFFFFF',
        'unorganic-green': '#D3F985',
        'sky-blue': '#A6E8F6',
        'shiny-pink': '#FCBEDC',
        'almost-orange': '#FBC899',
        'powerless-grey': '#F1F1F1'
      },
      fontFamily:{
        NRBold:['Neue-Regrade-Bold'],
        GSRegular:['GeneralSans-Regular'],
        GSSemibold:['GeneralSans-Semibold']
      }
    },
  },
  plugins: [],
}

