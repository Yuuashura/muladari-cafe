/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE0',
        espresso: '#261B12',   // Vintage Dark Coffee Brown
        mocha: '#4A3528',      // Vintage Medium Mocha Brown
        forest: '#133E2B',     // Brand Green from logo
        olive: '#2E4C3E',      // Brand Soft Green
        caramel: '#C4863A',
        gold: '#D4A853',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
