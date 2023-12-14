/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: ['group-hover'],
      colors:{
        brightColor: "#6c6cac",
        darkColor: "#1e2180",
      },
      backgroundImage: {
        'bg': "url('/src/assets/img/bg.png')",
        'glasscard': "url('/src/assets/img/glasscard.png')",
        'navbarbg': "url('/src/assets/img/navbarbg.png')",
       
    },
  },
  plugins: [],
}
}
