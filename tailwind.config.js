/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    animation: {
      fadeInOut: "fadeInOut 5s ease-in-out infinite",
    },
    keyframes: {
      fadeInOut: {
        "0%, 100%": { opacity: 0 },
        "50%": { opacity: 1 },
      },
    },
  },
  plugins: [],
};
