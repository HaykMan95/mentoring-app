module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "@typescript-eslint/eslint-plugin", 
    "react", 
    "prettier", 
    "import", 
    "unused-imports", 
    "react-hooks"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended", 
    "plugin:react/recommended", 
    "plugin:react/jsx-runtime", 
    "plugin:react-hooks/recommended", 
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
    browser: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  settings: {
    react: {
      version: 'detect'
    },
    "import/resolver": {
      typescript: {},
    }
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "error",

    // Force interfaces to start with "I"
    "@typescript-eslint/naming-convention": ["error", {
      "selector": "interface",
      "format": ["PascalCase"],
      "custom": {
        "regex": "^I[A-Z]",
        "match": true
      }
    }],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["warn", {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_"
    }],
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      "pathGroups": [{
        "pattern": "~/**",
        "group": "internal"
      }]
    }],
    "import/newline-after-import": "error",
    
    "prettier/prettier": ["error", {
      singleQuote: true,
      trailingComma: "all",
      arrowParens: "always",
      printWidth: 100,
      useTabs: false,
      tabWidth: 2
    }]
  }
};
