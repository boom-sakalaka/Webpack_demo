/*
 * @Author: your name
 * @Date: 2021-06-01 21:14:22
 * @LastEditTime: 2021-06-01 21:29:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\bundler\bundler.js
 */

const fs = require('fs');
const paser = require('@babel/parser');
const moduleAnalyser = filename => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = paser.parse(content, {
    sourceType: 'module',
  }); // 抽象语法树
  console.log(ast.program.body);
  // console.log(content);
};

moduleAnalyser('./src/index.js');
