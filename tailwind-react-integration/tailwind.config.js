/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Updated for unused styles removal
  darkMode: false, // You can keep this or modify based on your project needs
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // Optional for customization
  },
  plugins: [],
};
