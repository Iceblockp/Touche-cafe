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

    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

