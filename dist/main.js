/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/testWithBabel.js
var arrowFunc = function arrowFunc(n1, n2, operator) {
  switch (operator) {
    case '+':
      console.log("Resultado da opera\xE7\xE3o: ".concat(n1 + n2));
      break;
    case '-':
      console.log("Resultado da opera\xE7\xE3o: ".concat(n1 - n2));
      break;
    case '/':
      console.log("Resultado da opera\xE7\xE3o: ".concat(n1 / n2));
      break;
    case '*':
      console.log("Resultado da opera\xE7\xE3o: ".concat(n1 * n2));
      break;
    case '%':
      console.log("Resultado da opera\xE7\xE3o: ".concat(n1 % n2));
      break;
    case '^':
      console.log("Resultado da opera\xE7\xE3o: ".concat(n1 ^ n2));
      break;
    default:
      console.log('Opção inválida!');
      break;
  }
};

;// CONCATENATED MODULE: ./src/index.js


arrowFunc(15, 5, '/'); // 3 
arrowFunc(8, 2, '-'); // 6
arrowFunc(2, 4, '+'); // 6
arrowFunc(2, 1, '*'); // 2
arrowFunc(2, 3, '^'); // 8
arrowFunc(3, 3, '%'); // 0
/******/ })()
;