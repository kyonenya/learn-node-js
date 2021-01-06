"use strict";
const curriedCalcTax = (late) => (price) => price * late;
const japaneseCalcTax = curriedCalcTax(1.08);
const humbergerPrice = japaneseCalcTax(100);
console.log(humbergerPrice);
const execute = (params) => params.toString();
const container = (execute) => (params) => execute(params);
