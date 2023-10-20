module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "prettier", "plugin:node/recommended"],

    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-unused-vars": 1,
    },
    plugins: ["prettier"],
};
