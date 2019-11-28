module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    semi: ["error", "never"],
    "no-unused-vars": "off",
    "quotes": ["error", "double"],
    "@typescript-eslint/no-unused-vars": "error",
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