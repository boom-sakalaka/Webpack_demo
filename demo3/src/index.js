/*
 * @Author: your name
 * @Date: 2021-04-11 14:11:21
 * @LastEditTime: 2021-04-11 15:25:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo3\src\index.js
 */

// import './style.css';

// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);
// btn.onclick = function () {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div);
// };

import counter from './couter.js';
import number from './number.js';
counter();
number();

if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  });
}
