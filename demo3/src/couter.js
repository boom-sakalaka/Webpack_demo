/*
 * @Author: your name
 * @Date: 2021-04-11 15:14:44
 * @LastEditTime: 2021-04-11 15:22:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo3\src\couter.js
 */
export default function counter() {
  var div = document.createElement('div');
  div.setAttribute('id', 'counter');
  div.innerHTML = '0';
  div.onclick = function () {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1;
  };
  document.body.appendChild(div);
}
