/*
 * @Author: your name
 * @Date: 2021-06-01 21:14:22
 * @LastEditTime: 2021-06-01 22:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Webpack_demo\bundler\bundler.js
 */

const fs = require('fs');
const path = require('path');
const paser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const moduleAnalyser = filename => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = paser.parse(content, {
    sourceType: 'module',
  }); // 抽象语法树
  const dependencies = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename);
      const newFilr = path.join(dirname, node.source.value);
      dependencies[node.source.value] = newFilr;
    },
  });
  // console.log(dependencies);
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'],
  });
  //  console.log(code);
  return {
    filename,
    dependencies,
    code,
  };
};

const moduleInfo = moduleAnalyser('./src/index.js');
console.log(moduleInfo);
