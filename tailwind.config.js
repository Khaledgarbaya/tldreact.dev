module.exports = {
  purge: {
    content: ["./**/*.js", "./**/*.11ty.js", "./**/*.html", "./**/*.njk"],
  },
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
