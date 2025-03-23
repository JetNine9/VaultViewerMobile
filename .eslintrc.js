module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-no-undef': 'error',  // Flag undefined components as errors
    '@typescript-eslint/no-unused-vars': 'warn',  // Warn about unused variables
    'react/jsx-uses-react': 'off',  // No need to import React in React 17+
    'react/react-in-jsx-scope': 'off',  // React 17+ (React Native doesn't need it)
  },
};
