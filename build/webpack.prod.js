const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const baseWebpackConfig  = require('./webpack.common');
const { resolveApp } = require('./mounted');

const proWebpackConfig = {
  // 模式
  mode: 'production',
  output: {
    path: resolveApp('dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: './',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(resolveApp('src'), info.absoluteResourcePath)
        .replace(/\\/g, '/'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: require('../postcss.config'),
            },
          },
          {
            loader: 'sass-loader',
            options: {
              module: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  optimization: { // 公共块提取
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
  },
};

module.exports = merge(baseWebpackConfig, proWebpackConfig)
