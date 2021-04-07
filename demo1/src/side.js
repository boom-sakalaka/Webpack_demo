/*
 * @Author: your name
 * @Date: 2021-04-07 19:40:49
 * @LastEditTime: 2021-04-07 20:49:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo1\side.js
 */
export default function Side() {
  var dom = document.getElementById('root');
  var side = document.createElement('div');
  side.innerHTML = 'side';
  dom.append(side);
}
