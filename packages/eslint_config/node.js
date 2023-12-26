/**
 * From: https://turbo.build/repo/docs/handbook/linting/eslint
 * 
 * Modified for NodeJS only projects
 */
const { resolve } = require("node:path");
 
const project = resolve(process.cwd(), "tsconfig.json");
 
/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */
 
module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    // turborepo custom eslint configuration configures the following rules:
    //  - https://github.com/vercel/turbo/blob/main/packages/eslint-plugin-turbo/docs/rules/no-undeclared-env-vars.md
    "eslint-config-turbo",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
  },
};