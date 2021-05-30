/*
 * @Author: your name
 * @Date: 2021-04-13 11:01:31
 * @LastEditTime: 2021-05-30 10:50:00
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
      chunks: 'all', // 同步异步都参与拆分打包
      minSize: 0, // 引入的包大于多少才开始代码分割 一般使用 30000
      maxSize: 0, // 最大不做代码分隔
      minChunks: 1, // 当一个模块被用了多少次才会被打包
      maxAsyncRequests: 5, // 同时加载最多的库
      maxInitialRequests: 3, // 首页同时加载的库
      automaticNameDelimiter: '~', // 间隔符
      automaticNameMaxLength: 30, // 文件名最长多少
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 这个包是否在node_modules中，属于这个组
          priority: -10,
          filename: 'vendors.js', //所有的代码被打包在这个文件中
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
