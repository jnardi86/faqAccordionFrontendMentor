/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Light-pink': 'hsl(275, 100%, 97%)',
        'Grayish-purple': 'hsl(292, 16%, 49%)',
        'Dark-purple': 'hsl(292, 42%, 14%)'
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'], 
      },
      backgroundImage: {
        'pattern-desktop': "url('/src/assets/images/background-pattern-desktop.svg')",
        'pattern-mobile': "url('./src/assets/images/background-pattern-mobile.svg')",
      }
    },
  },
  plugins: [],
}

