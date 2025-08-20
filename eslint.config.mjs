// FILE: eslint.config.js
// This is the complete, merged, and corrected configuration.

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// This robust method ensures __dirname works in all environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the compatibility utility
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the final configuration array
const eslintConfig = [
  // Use compat.config() to convert a classic ESLint config object
  // into the new flat config format.
  ...compat.config({
    // We extend the recommended Next.js config, which is the best practice
    extends: ["next/core-web-vitals"],

    // We add our custom rules here. These will override the defaults.
    rules: {
      // This is the rule you wanted from before to allow apostrophes
      "react/no-unescaped-entities": "off",

      // This is the new rule to allow custom fonts in page files
      "@next/next/no-page-custom-font": "off",
    },
  }),
  // You can add other flat config objects here in the future if needed
];

export default eslintConfig;
