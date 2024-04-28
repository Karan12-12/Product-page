// tailwind.config.js

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        blue: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Add more custom colors if needed
      },
    },
    screens: {
      "2sm": "500px",
      xsm: "580px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      smmd: "700px",

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdl: "900px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      slgxl: "1100px",
      lgxl: "1200px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1.5xl": "1400px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
