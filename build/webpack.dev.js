const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig  = require('./webpack.common');
const { resolveApp } = require('./mounted');

const devWebpackConfig = {
  // 模式
  mode: 'development',
  output: {
    path: resolveApp('dist'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    devtoolModuleFilenameTemplate: info =>
      path
        .resolve(info.absoluteResourcePath)
        .replace(/\\/g, '/'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '../dist'),
    compress: false, // 压缩
    hot: true, //热更新
    // historyApiFallback: true,
    host: '0.0.0.0',
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};

module.exports = merge(baseWebpackConfig, devWebpackConfig)
