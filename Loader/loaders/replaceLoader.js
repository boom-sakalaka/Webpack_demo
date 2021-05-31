/*
 * @Author: your name
 * @Date: 2021-05-31 22:04:25
 * @LastEditTime: 2021-05-31 22:10:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\Loader\loaders\replaceLoader.js
 */
module.exports = function (source) {
  return source.replace('gzh', this.query.name);
};
