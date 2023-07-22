// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'], // Add your HTML and JavaScript files
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};


// module.exports = {
//   mode: "jit", // Enable JIT mode
//   purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"], // Purge unused styles during build
//   theme: {
//     // Your theme configuration here (customize your colors, typography, spacing, etc.)
//     extend: {
//       // Add any additional custom styles here
//     },
//   },
//   variants: {
//     extend: {
//       // Add any custom variants here (e.g., to override default behavior)
//     },
//   },
//   plugins: [
//     // Add any custom plugins here (if required)
//   ],
// };


