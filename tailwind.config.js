/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
    },

    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./image/coffeeBottle.jpg')",
      },
    },
  },
  plugins: [],
}

