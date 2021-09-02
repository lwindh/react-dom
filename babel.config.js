const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 2,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime', // 避免多次编译出helper函数,解决@babel/polyfill提供的类或者实例方法污染全局作用域的情况
    '@babel/plugin-proposal-class-properties', // 处理class里面写箭头函数或者装饰器
  ],
};

module.exports = babelConfig;
