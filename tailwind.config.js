/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'primaryTitle': '#FF6B6B',
        'primaryContent': '#1E3A8A',
        'primarySubcontent': '#8AA6A3',
        'primaryBase': '#FFD700',
        'primaryAccent': '#f9a916',
        'primaryBg': '#f6f6f6',
      }
    },
  },
  plugins: [],
}

