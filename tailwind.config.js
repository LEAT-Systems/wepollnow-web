/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('images/ng_1.png')",
        "polls-pattern": "url('images/bg_polls.png')",
        "hero-container-pattern": "url('images/hero-bg.png')",
        "btn-prev": "url('images/prev.png')",
      }),
      spacing: {
        98: "31rem",
      },
      colors: {
        deepgray: "rgb(46, 6, 15)",
        transparentWhite: "rgba(245, 241, 241, 0.2)",
      },
    },
  },

  plugins: [],
};
