const path = require("path")
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(__dirname, "tsconfig.json"),
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "never"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "as-needed"],
    'prefer-arrow-callback': ["error"],
    "prettier/prettier": "error"
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ]
}