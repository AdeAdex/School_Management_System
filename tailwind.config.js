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
  },
  variants: {
  },
  plugins: [
  ],
  prefix: "tw-",
};

