/*
 * @Author: your name
 * @Date: 2021-04-07 21:23:29
 * @LastEditTime: 2021-04-07 21:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo1\webpack.config.js
 */
const path = require('path');

module.exports = {
  entry: './src/index.js', //入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
  },
};
