module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'jsx-a11y', 'prettier', 'simple-import-sort'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    '@typescript-eslint/no-unused-vars': 1,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-key': 1,
    'jsx-a11y/alt-text': 1,
    '@typescript-eslint/no-explicit-any': 0,
    'no-duplicate-imports': 1,
    '@typescript-eslint/ban-ts-comment': 1,

    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Function: 'Prefer declaring the type of the function',
        },
        extendDefaults: true,
      },
    ],
  },
};
