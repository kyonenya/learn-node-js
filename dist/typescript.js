"use strict";
// 型引数
const toArray = (...args) => [...args];
const array1 = toArray(3, 7);
const num1 = [2, 3, 5];
// const num2: TNum2 = 2;
// -> Type 'number' is not assignable to type 'number[]'.
