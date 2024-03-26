/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#A699FF",
      },
      backgroundColor: {
        default: "#ACA0FE",
        label: "rgba(167, 153, 255, 0.4)",
        labelLight: "rgba(166, 153, 255, 0.4)",
        grey: "rgba(0, 0, 0, 0.4)",
        black1: "rgba(0, 0, 0, 1)"
      },
      fontSize: {
        f28: "28px",
        f24: "24px",
        f26: "26px"
      },
      backgroundImage: {
        "gradient": "linear-gradient(270deg, #E2DFF6 0.03%, #A699FF 99.97%)",
        "gradient-light": "linear-gradient(270deg, #E2DFF6 151.03%, #A699FF 299.97%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    rotate: {
      10: "10deg",
      m10: "-10deg",
    },
  },
  plugins: [],
};
