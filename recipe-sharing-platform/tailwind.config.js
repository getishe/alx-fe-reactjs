// /** @type {import('tailwindcss').Config} */
// export default {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Purge unused styles
//   darkMode: "class", // You can use "media" or "class"
//   theme: {
//     extend: {}, // Add custom styling here
//   },
//   variants: {
//     extend: {}, // Extend variant settings if needed
//   },
//   plugins: [], // Add plugins here if required
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // You can use "media" or "class"
  theme: {
    extend: {}, // Add custom styling here
  },
  variants: {
    extend: {}, // Extend variant settings if needed
  },
  plugins: [], // Add plugins here if required
};
