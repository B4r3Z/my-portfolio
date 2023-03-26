/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", "monospace"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
