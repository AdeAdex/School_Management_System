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
  mode: "jit",
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    // Your theme configuration here
  },
  variants: {
    // Your variants configuration here
  },
  plugins: [
    // Your plugins configuration here
  ],
  prefix: "tw-", // Add a prefix to Tailwind CSS classes
};

