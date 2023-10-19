module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    // extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],

    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {},
    // plugins: ["prettier"],
}
