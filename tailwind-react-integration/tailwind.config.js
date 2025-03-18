// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {
//       // You can add custom styling here, such as colors, fonts, etc.
//     },
//   },
//   plugins: [
//     // You can add Tailwind plugins here if needed.
//   ],
// };

/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Purge unused styles
  darkMode: "class", // You can use "media" or "class"
  theme: {
    extend: {}, // Add custom styling here
  },
  variants: {
    extend: {}, // Extend variant settings if needed
  },
  plugins: [], // Add plugins here if required
};
