import js from '@eslint/js';

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      node: true,
      es2021: true,
    },
    rules: {
      // General backend best practices
      'no-console': 'off', // backend me console.log allowed hota hai
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',

      // Async / Promise rules
      'no-async-promise-executor': 'error',
      'require-await': 'warn',

      // Clean code
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'consistent-return': 'warn',

      // Error handling
      'no-throw-literal': 'error',

      // Style (basic)
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
    },
  },
];
