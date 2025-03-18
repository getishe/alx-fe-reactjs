/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Adjusted to scan necessary files
  darkMode: false, // You can keep this or change to 'media' or 'class' if needed
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // Variants aren't a common need in modern Tailwind, but you can leave this for customization
  },
  plugins: [],
};
