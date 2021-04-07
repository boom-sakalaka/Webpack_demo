/*
 * @Author: your name
 * @Date: 2021-04-07 19:40:45
 * @LastEditTime: 2021-04-07 19:48:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo1\header.js
 */
export default function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div');
  header.innerHTML = 'header';
  dom.append(header);
}
