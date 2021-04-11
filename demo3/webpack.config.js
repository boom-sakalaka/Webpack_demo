/*
 * @Author: your name
 * @Date: 2021-04-07 21:23:29
 * @LastEditTime: 2021-04-11 14:43:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
// plugin （插件） 可以在webpack的某个时候，帮你做一些事情
module.exports = {
  mode: 'development', // 开发环境
  // mode: 'production', // 正式环境
  entry: {
    main: './src/index.js',
  }, //入口文件
  devtool: 'cheap-module-eval-source-map', // 开发环境
  //devtool: 'cheap-module-source-map', // 正式环境
  devServer: {
    port: 8090,
    contentBase: './dist',
    open: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
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
    ],
  },
  // 自动生成html文件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new clearWebpackPlugin(['dist']),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
