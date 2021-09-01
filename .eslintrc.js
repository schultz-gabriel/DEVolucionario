module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
  },
};
