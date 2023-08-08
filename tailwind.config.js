/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        gblue: "#4284FA",
        gred: "#EA4336",
        ggreen: "#139D57",
        text: "#000",
        textlight: "#949494",
        glass: "#ffffff66",
      },
      boxShadow: {
        shadow1: "0px 8px 20px rgba(35, 35, 35, 0.1)",
        shadow2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        wobble: {
          "50%": {
            borderRadius: "750px 550px 350px 750px / 350px 750px 550px 450px",
          },
          "100%": {
            borderRadius: "750px 250px 750px 250px / 250px 750px 250px 750px",
          },
        },
        wobble2: {
          "50%": {
            borderRadius: "70px 40px 20px 70px / 40px 70px 30px 40px",
          },
          "100%": {
            borderRadius: "70px 40px 50px 40px / 40px 70px 40px 70px",
          },
        },
        scl: {
          "0%": { bottom: "-50vh",left:'50vw', transform: "translate(-50%,-50%)" },
          "100%": {
            bottom: "50vh",
            left: "50vw",
            transform: "translate(-50%,50%)",
          },
        },
      },
      animation: {
        appear: "appear 1s ease-in forwards",
        wobble: "wobble 3s ease-in-out alternate infinite",
        wobble2: "wobble2 3s ease-in-out alternate infinite",
        scl: "scl 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
