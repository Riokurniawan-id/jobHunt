/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/bgImage.svg')",
      },
    },
  },
  plugins: [],
};
