/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          barra: "#101010",
          background: "#1e1e1e",
          backgroundCard: "#181818",
          backgroundCardHover:"#282828",
          sidebar: "#000000"
        },
      },
    },
  },
  plugins: [],
}