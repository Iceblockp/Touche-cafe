/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },

    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/image/coffeeBottle.jpg')",
      },
      maxWidth: {
        1140: "1140px",
      },
      screens: {
        sm: "375px", // Mobile screens
        md: "768px", // Tablet screens
        lg: "1024px", // Laptop/desktop screens
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
