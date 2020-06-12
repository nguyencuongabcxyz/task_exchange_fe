module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // For more Eslint options, reference here: https://eslint.org/docs/rules/
    // For more Eslint-Typesciprt plugin options, reference here: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    // For more Eslint-React plugin options, reference here: https://github.com/yannickcr/eslint-plugin-react
    "comma-dangle": ["error", "always-multiline"],
    "arrow-parens": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
    "jsx-quotes": ["error", "prefer-single"],
    "quotes": ["error", "single"],
    "object-curly-spacing": ["error", "always"],
    "indent": "off",
    "no-param-reassign": "error",
    "prefer-const": "off",
    "no-unused-vars": "off",
    // "@typescript-eslint/indent": ["error", 2],    
    // "@typescript-eslint/no-unused-vars": ["error", {
    //   "vars": "all",
    //   "args": "none",
    //   "ignoreRestSiblings": false
    // }],
    // "@typescript-eslint/no-use-before-define": "off",
    // "@typescript-eslint/no-var-requires": "warn",
    // "@typescript-eslint/interface-name-prefix": ["error", "always"],
    // "@typescript-eslint/array-type": ["error", {
    //   default: 'array',
    // }],
    // "@typescript-eslint/explicit-member-accessibility": ["error", {
    //   "accessibility": "explicit",
    //   "overrides": { "constructors": "no-public" }
    // }],
    // "@typescript-eslint/no-empty-interface": ["error", {
    //     "allowSingleExtends": true
    // }],
    // "@typescript-eslint/ban-ts-ignore": "off"    
  },
};
