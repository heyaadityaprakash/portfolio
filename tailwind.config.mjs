/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#28282A",
        darkTheme:"#0B0B0B",
      },
      boxShadow:{
        "black":"4px 4px 0 #000",
        "white":"4px 4px 0 #fff"

      },

      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      }
    },
  },
  darkMode:'selector',
  plugins: [],
};
