/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('images/ng_1.png')",
        "polls-pattern": "url('images/bg_polls.png')",
      }),
    },
  },

  plugins: [],
};
