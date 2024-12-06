import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/**
 * @type {import("eslint").Linter.Config}
 */
const config = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:drizzle/recommended",
  ),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
        },
      ],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];

export default config;
