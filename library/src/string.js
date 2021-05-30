/*
 * @Author: your name
 * @Date: 2021-05-30 19:49:43
 * @LastEditTime: 2021-05-30 20:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\library\src\string.js
 */
import _ from 'lodash';

export function join(a, b) {
  return _.join([a, b], '|');
}
