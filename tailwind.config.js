/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/image/coffeeBottle.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

