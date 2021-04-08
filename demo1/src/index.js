/*
 * @Author: your name
 * @Date: 2021-04-07 19:42:28
 * @LastEditTime: 2021-04-08 20:56:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo1\index.js
 */

import avatar from './1.jpg';
import './index.scss';

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img);
