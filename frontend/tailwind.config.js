/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "float-reverse": "float 25s ease-in-out infinite reverse",
        "float-slow": "floatSlow 30s ease-in-out infinite",
        blink: "blink 1s infinite",
        shimmer: "shimmer 3s infinite",
        "fade-in": "fadeIn 1s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(50px, 50px) scale(1.1)" },
        },
        floatSlow: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.03",
          },
          "50%": {
            transform: "translateY(-30px) rotate(180deg)",
            opacity: "0.08",
          },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "200%" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
