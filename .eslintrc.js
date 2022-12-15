module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-useless-escape': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-return-await': 'off',
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-properties': 'off',
    camelcase: 'off',
  },
};
