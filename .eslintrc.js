module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'max-lines-per-function': ['warn', { max: 30, skipComments: true, skipBlankLines: true }],
    complexity: ['warn', { max: 10 }],
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
