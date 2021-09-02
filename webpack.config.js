const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const { setPlugins } = require('./build/mounted');

const baseWebpackConfig = {
  resolve: {
    alias: {
      pages: path.join(__dirname, './src/pages'),
      router: path.join(__dirname, './src/router'),
      components: path.join(__dirname, './src/components'),
    },
    extensions: ['.tsx', '.ts', '.js'],
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
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              module: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              output: './static/images/',
            },
          },
        ],
      },
    ],
  },
  plugins: setPlugins(),
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
}

const devWebpackConfig = {
  // 模式
  mode: 'development',
  // 入口
  entry: {
    app: [path.join(__dirname, './src/index.js')],
  },
  // 输出到 dist 目录，输出文件名字为 bundle.js
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, './dist'),
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

const proWebpackConfig = {
  // 模式
  mode: 'production',
  // 入口
  entry: {
    app: [
      '@babel/polyfill',
      path.join(__dirname, './src/index.js'),
    ],
  },
  // 输出到 dist 目录，输出文件名字为 bundle.js
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath : '/',
    clean: true,
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, './src/pages'),
      router: path.join(__dirname, './src/router'),
      components: path.join(__dirname, './src/components'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              module: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: { // 公共块提取
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
    default:
      return merge(baseWebpackConfig, devWebpackConfig);
    case 'production':
      return merge(baseWebpackConfig, proWebpackConfig);
  }
}
