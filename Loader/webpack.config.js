/*
 * @Author: your name
 * @Date: 2021-05-31 22:00:01
 * @LastEditTime: 2021-05-31 22:07:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\Loader\webpack.config.js
 */
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [path.resolve(__dirname, './loaders/replaceLoader.js')],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name],js',
  },
};
