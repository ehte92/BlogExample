module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      "1/2": "320px",
      "3/4": "1023px",
    },
    minWidth: {
      "1/2": "768px",
    },
    flex: {
      100: "1 1 100%",
    },
    margin: {
      "1/10": "10%",
      "2/5": "5%",
    },
    colors: {
      green: {
        light: "#78b893",
      },
      black: {
        darkest: "#193023",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
