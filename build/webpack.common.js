const path = require('path');
const { setPlugins, resolveModule, resolveApp } = require('./mounted');
const CSS_BASE_LOADERS = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
        // 如果您需要在每个 CSS 的 `@import` 上运行 `sass-loader` 和 `postcss-loader`
        // 请将其设置为 `2`,如果只需要运行postcss-loader
        // 只需要将importLoaders设置为1
        importLoaders: 1,
    },
  },
  'postcss-loader',
]

const baseWebpackConfig = {
  // 入口
  entry: resolveModule(resolveApp, 'src/index'),
  resolve: {
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      router: path.join(__dirname, '../src/router'),
      components: path.join(__dirname, '../src/components'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          ...CSS_BASE_LOADERS,
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',
      },
    ],
  },
  plugins: setPlugins(),
}

module.exports = baseWebpackConfig
