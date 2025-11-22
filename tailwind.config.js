module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        pixel: "4px 4px 0px #000",  // retro block shadow
      },
      borderRadius: {
        pixel: "0", // sharp edges
      },
    },
  },
  plugins: [],
};
