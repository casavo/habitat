module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react-refresh",
    "sort-keys-fix",
    "typescript-sort-keys",
    "sort-destructure-keys",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react-refresh/only-export-components": "warn",
    "sort-keys-fix/sort-keys-fix": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
    "typescript-sort-keys/interface": [
      "error",
      "asc",
      {
        natural: true,
        requiredFirst: false,
      },
    ],
    "typescript-sort-keys/string-enum": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
  },
};
