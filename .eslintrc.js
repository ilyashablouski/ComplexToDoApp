/** react-app config already use "@typescript-eslint" for "*.ts(x)" files */

module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'unused-imports'],
  ignorePatterns: ['.eslintrc.js'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    // eslint additional rules
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
