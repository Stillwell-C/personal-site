/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        hero: "80vh",
      },
      maxWidth: {
        48: "48px",
      },
      maxHeight: {
        48: "48px",
      },
    },
  },
  plugins: [],
};
