/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    ], 
  theme: {
    extend: {
      boxShadow:{
        neon: "0 0 5px theme('colors.amber.200'), 0 0 20px theme('colors.amber.700')"
    }
  },
  plugins: [],
}
}

/* On theme:
  extend: {
      boxShadow:{
        neon: "0 0 5px theme('colors.amber.200'), 0 0 20px theme('colors.amber.700')"
    }
  }
*/