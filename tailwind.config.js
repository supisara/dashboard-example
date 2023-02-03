/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#ffffff",
      optical: {
        white: {
          30: "rgba(250, 250, 250, 0.3)",
          50: "rgba(250, 250, 250, 0.5)",
          80: "rgba(250, 250, 250, 0.8)",
        },
      },
      border: {
        gray: "#E8E9EB",
      },
      gray: {
        verylight: "#F6F6F7",
        light: "#CFD0D2",
        middle: "#8A9099", //main
        dark: "#3F434A",
      },
      blue: {
        verylight: "#F3F8FD",
        light: "#E6F0FC",
        middle: "#0A6EE1", //secound
        dark: "#074E9F", //main
      },
      green: {
        // verylight: "#",
        light: "#E9F7F0",
        middle: "#22AB67", //main
        // dark: "",
      },
      red: {
        middle: "#D92D20",
      },
      orange: "#F79009",
      purple: "#BF5AF2",
      yellow: "#F8BD26",
      pink: "#E5347C",
      sky: "#0086C9",
    },
  },
  plugins: [],
};
