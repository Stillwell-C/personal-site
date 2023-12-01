/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      padding: {
        hero: "80vh",
      },
      maxWidth: {
        48: "48px",
      },
      maxHeight: {
        48: "48px",
      },
      colors: {
        "cosmic-latte": "#f7f3e3",
        lion: "#af9164",
        silver: "#b3b6b7",
        "davys-gray": "#575761",
        "imperial-red": "#f8333c",
        //second
        "battleship-gray": "#7E8987",
        bittersweet: "#ff715b",
        "prussian-blue": "#153243",
        ivory: "#f4f9e9",
        vanilla: "#e3dc95",
        "ash-gray": "#BBCBCB",
        //second add
        whitesmoke: "#f5f5f5",
        "slate-gray": "#6e8898",
        viridian: "#55917F",
        //with smoke
        "raisin-black": "#272727",
        "steel-blue": "#4D7EA8",
        gray: "#828489",
      },
    },
  },
  plugins: [],
};
