const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const setPlugins = function () {
  const res = []

  // 动态加载js
  const htmlWebpackPlugin =  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '../public/index.html'),
  });
  res.push(htmlWebpackPlugin)

  // 压缩CSS
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: '../static/css/[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  });
  res.push(miniCssExtractPlugin)

  return res
}

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`)),
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = { setPlugins, resolveModule, resolveApp }
