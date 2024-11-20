/** @type {import('tailwindcss').Config} */

import { keyframes } from "framer-motion";

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
      },
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
