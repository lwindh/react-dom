const path = require('path');
const { setPlugins, resolveModule, resolveApp } = require('./mounted');
const CSS_BASE_LOADERS = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: require('../postcss.config'),
    },
  },
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
          {
            loader: 'sass-loader',
            options: {
              module: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
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
