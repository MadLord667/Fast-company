module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: "off",
        "react/prop-types": "off",
        // indent: ["error", 4],
        semi: [2, "always"],
        // "space-befare-functon-paren": ["error", "never"],
        // "space-before-function-paren": ["error", "always"],
        "multiline-ternary": ["off"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
