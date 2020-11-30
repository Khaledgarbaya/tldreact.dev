module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.js", "./**/*.11ty.js", "./**/*.html", "./**/*.njk"],
  },
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    purgeLayersByDefault: true,
  },
};
