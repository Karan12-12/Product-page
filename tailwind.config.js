// tailwind.config.js

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      "2sm": "500px",
      xsm: "580px",
      sm: "640px",

      smmd: "700px",

      md: "768px",

      mdl: "900px",
      lg: "1024px",

      slgxl: "1100px",
      lgxl: "1200px",
      xl: "1280px",

      "1.5xl": "1400px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
