import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules", "dist", "coverage", "data", "raw", "src/utils", "docs"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    files: ["tests/**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
