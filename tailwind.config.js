/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          DEFAULT:'#280F3F',
          dark:'#3C1E57'
        },
        green:{
          DEFAULT:'#17E38A',
        }
      }
    },
    screens: {
      'smallmobile': '320px',
      // => @media (max-width: 320px) { ... }

      
    },
  },
  plugins: [],
}
