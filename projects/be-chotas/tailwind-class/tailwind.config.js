/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: {
    fontFamily: {
      'miFuente': ['Roboto', 'sans-serif'],
      'videojuego':['Pixelify Sans', 'cursive']

    },
  },
  plugins: [
    plugin(({theme,addUtilities})=>{
      const neonUtilities = {};
      const colors = theme("colors");
      for (const color in colors){
        if (typeof colors[color]==="object"){
          const color1 = colors[color]["700"];
          const color2 = colors[color]["200"];
          neonUtilities[`.neon-${color}`] = {
            boxShadow:`0 0 10px ${color1}, 0 0 30px ${color2}`,
          }
        }
      }
      addUtilities(neonUtilities)
    })
  ]
}
