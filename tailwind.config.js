/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bdd": "url('/bg.png')",
      },
      colors:{
        'primaryBlue':'#134DE2',
        'secondBlue':'#C1C1FF',
        'primaryBlack':'#1E1E1E'
      },
      fontFamily:{
        Montserrat:['Montserrat'],
        Inter:['Inter']
      },
   
      fontWeight: {
        'wow': '800',
      }
     
    },
  },
  plugins: [],
};
