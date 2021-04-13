/*
 * @Author: your name
 * @Date: 2021-04-13 11:01:31
 * @LastEditTime: 2021-04-13 21:26:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo5\webpack.commone.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/index.js',
  }, //入口文件
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048,
          },
        },
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.scss$/,
        // 执行顺序 从右到左 style-loader 挂载css到html中， css-loader 解析css  sass-loader 解析sass  需要安装 sass-loader node-sass
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoader: 2,
              // modules: true,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        // 执行顺序 从右到左 style-loader 挂载css到html中， css-loader 解析css  sass-loader 解析sass  需要安装 sass-loader node-sass
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  // 自动生成html文件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new clearWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js',
        },
        default: {
          //minChunks: 2, // 模块被用了多少次才分割
          priority: -20,
          reuseExistingChunk: true, // 如果一个模块重复引用，已经被打包，不会重复打包，直接引用打包好的
          filename: 'common.js',
        },
      },
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
};
