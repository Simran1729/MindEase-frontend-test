/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        monty : ["Montserrat"," sans-serif"],
      }
    },
  },
  plugins: [],
}