/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      // glassCase: {
      //   backdropFilter: ["hover", "focus"],
      //   backdropBlur: {
      //     xs: "2px",
      //     lg: "4px",
      //   },
      // backdrop-blur-lg bg-opacity-20 border-b border-gray-700
      // },
      backgroundImage: {
        "custom-gradient": `linear-gradient(
          50deg,
          rgba(255, 255, 255, 0.4) 12%,
          rgba(255, 255, 255, 0.1) 77%
        )`,
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 0, 255, 0.6)",
      },
      backdropBlur: {
        "custom-blur": "5px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".custom-blur-backdrop": {
          "@apply backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-700":
            {},
        },
      });
    }),
  ],
};
