// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-extra-boolean-cast': 0, // 多余的感叹号转布尔型
    'indent': [ 'error', 4, { "SwitchCase": 1 }],
    "semi": [2, "always"], // 末尾分号
    "space-before-function-paren": [2, "always"], // function 括号前加空格
    "space-infix-ops": 2, // 规定在一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    // 规定注释和代码块之间是否留空行
    "lines-around-comment": 2,
    "no-multiple-empty-lines": [1, {"max": 3}], // 空行最多不能超过2行
    // 规定是否需要在代码注释起始符// or /*后面至少紧跟一个空格
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }]
  }
}
