/*
 * @Author: your name
 * @Date: 2021-05-30 19:56:03
 * @LastEditTime: 2021-05-30 20:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\library\webpack.config.js
 */
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: ['lodash'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd',
  },
};
