module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'module',
    },
    globals: {
      NodeJS: 'readonly',
    },
    plugins: [
      '@typescript-eslint',
    ],
    env: {
      node: true,
    },
    extends: [
      'airbnb-base',
      'plugin:import/typescript',
    ],
    rules: {},
    overrides: [],
    settings: {
      'import/extensions': [
        '.js',
        '.ts',
      ],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        node: {
          extensions: [
            '.js',
            '.json',
            '.ts',
          ],
        },
      },
    },
  }
