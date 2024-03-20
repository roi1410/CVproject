/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { primary: "#E1F0DA", secondary: "#D4E7C5",popUp: "#99BC85",backgrownd:"#99BC85"} },
    container: {
      center: true,
    },
  },
  plugins: [],
};
