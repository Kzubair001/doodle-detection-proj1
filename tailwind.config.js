/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#474646",
          "200": "#434343",
        },
        darkgray: "#9d9d9d",
        whitesmoke: "#f6f6f6",
        blue: "#7019ff",
        white: "#FFFFFF",
        gray: {
          "100": "#252525",
          "200": "rgba(32, 32, 32, 0.97)",
        },
        gainsboro: "#ddd",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
