const path = require("path")
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    project: path.resolve(__dirname, "tsconfig.json"),
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    semi: ["error", "never"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "as-needed"],
    "prefer-arrow-callback": ["error"],
    "prettier/prettier": "error"
  },
  extends: [
    "eslint-config-prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ]
}