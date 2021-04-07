/*
 * @Author: your name
 * @Date: 2021-04-07 19:40:53
 * @LastEditTime: 2021-04-07 20:49:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_Demo\demo1\footer.js
 */
export default function Footer() {
  var dom = document.getElementById('root');
  var footer = document.createElement('div');
  footer.innerHTML = 'footer';
  dom.append(footer);
}
