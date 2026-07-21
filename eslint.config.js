const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const prettierConfig = require("eslint-config-prettier");

const baseConfig = {
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: { jsx: true },
    },
    globals: {
      window: "readonly",
      document: "readonly",
      navigator: "readonly",
      fetch: "readonly",
      Headers: "readonly",
      Response: "readonly",
      localStorage: "readonly",
      sessionStorage: "readonly",
      process: "readonly",
      module: "readonly",
      require: "readonly",
      __dirname: "readonly",
      __filename: "readonly",
      global: "readonly",
      describe: "readonly",
      it: "readonly",
      test: "readonly",
      expect: "readonly",
      beforeEach: "readonly",
      afterEach: "readonly",
      jest: "readonly",
    },
  },
  settings: {
    react: { version: "detect" },
  },
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
    "jsx-a11y": jsxA11yPlugin,
    "@typescript-eslint": tsEslintPlugin,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};

module.exports = [
  // top-level ignore patterns (flat config prefers explicit ignores entry)
  { ignores: ["node_modules/**", ".next/**", "coverage/**", "out/**", "build/**", "public/**"] },
  baseConfig,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs.flat.recommended,
  {
    languageOptions: {
      parserOptions: jsxA11yPlugin.configs.recommended.parserOptions,
    },
    rules: jsxA11yPlugin.configs.recommended.rules,
  },
  ...tsEslintPlugin.configs["flat/recommended"],
  { rules: prettierConfig.rules },
  // Explicit overrides to ensure React automatic runtime is allowed
  { rules: { "react/react-in-jsx-scope": "off" } },
];
