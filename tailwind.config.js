/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor: '#96EFFF'
      }
    },
  },
  plugins: [require("daisyui")],
}

