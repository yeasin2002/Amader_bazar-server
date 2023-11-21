/* eslint-disable no-undef */
module.exports = {
    env: {
        node: true,
        browser: false,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "node", "security", "prettier"],
    rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "node/no-unsupported-features/es-syntax": "off",
        "security/detect-object-injection": "off",
        "prettier/prettier": 0,
    },
};
