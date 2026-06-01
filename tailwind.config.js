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
        espresso: '#133E2B', // Brand Green (Forest Green)
        mocha: '#2E4C3E',    // Secondary Soft Green
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
