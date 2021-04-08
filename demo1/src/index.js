/*
 * @Author: your name
 * @Date: 2021-04-07 19:42:28
 * @LastEditTime: 2021-04-08 21:39:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo1\index.js
 */

import avatar from './1.jpg';
import style from './index.scss';

console.log(style);
var img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.append(img);
