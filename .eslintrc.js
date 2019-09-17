// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: [],
  rules: {
    // allow console and debugger in development
    'class-methods-use-this': 0,
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'no-param-reassign': 0,
    'no-control-regex': 0,
    'linebreak-style': ['error', 'windows']
  }
};