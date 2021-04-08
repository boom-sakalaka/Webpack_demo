/*
 * @Author: your name
 * @Date: 2021-04-07 19:42:28
 * @LastEditTime: 2021-04-08 20:35:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo1\index.js
 */

import avatar from './1.jpg';

var img = new Image();

img.src = avatar;

var root = document.getElementById('root');
root.append(img);
