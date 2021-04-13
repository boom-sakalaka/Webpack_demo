/*
 * @Author: your name
 * @Date: 2021-04-13 10:54:34
 * @LastEditTime: 2021-04-13 11:19:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo5\webpack.prod.js
 */
const merge = require('webpack-merge');
const commoneConfig = require('./webpack.commone.js');
// plugin （插件） 可以在webpack的某个时候，帮你做一些事情
const prodConfig = {
  mode: 'production', // 正式环境
  devtool: 'cheap-module-source-map', // 正式环境
};
module.exports = merge(commoneConfig, prodConfig);
