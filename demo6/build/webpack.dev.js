/*
 * @Author: your name
 * @Date: 2021-04-07 21:23:29
 * @LastEditTime: 2021-04-13 11:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\webpack.config.js
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const commoneConfig = require('./webpack.commone.js');
// plugin （插件） 可以在webpack的某个时候，帮你做一些事情

const devConfig = {
  mode: 'development', // 开发环境
  //mode: 'production', // 正式环境
  devtool: 'cheap-module-eval-source-map', // 开发环境
  //devtool: 'cheap-module-source-map', // 正式环境
  devServer: {
    port: 8090,
    contentBase: './dist',
    open: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
    //hotOnly: true,
  },
  // 自动生成html文件
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true,
  }, //production 环境自定使用Tree  Shaking
};

module.exports = merge(commoneConfig, devConfig);
