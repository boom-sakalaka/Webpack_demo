/*
 * @Author: your name
 * @Date: 2021-05-31 22:04:25
 * @LastEditTime: 2021-05-31 22:19:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\Loader\loaders\replaceLoader.js
 */

const loaderUtils = require('loader-utils');
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  // const result = source.replace('gzh', options.name);
  // this.callback(null, result);
  const callback = this.async();
  setTimeout(function () {
    const result = source.replace('gzh', options.name);
    callback(null, result);
  }, 1000);
};
