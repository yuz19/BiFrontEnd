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
        "bg-dark": "url('/bg-dark.png')",
      },
      colors:{
        'primaryPurple':'#6B6FB3',
        'secondPurple':'#A9ACE7',
        'primaryWhite':'#F3EAEA'
      },
      fontFamily:{
        Inter:['Inter']
      },
    },
  },
  plugins: [],
};
