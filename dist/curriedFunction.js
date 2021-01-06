"use strict";
const curriedCalcTax = (late) => (price) => price * late;
const japaneseCalcTax = curriedCalcTax(1.08);
const humbergerPrice = japaneseCalcTax(100);
const execute = (params) => params.toString();
const container = (execute) => (params) => execute(params);
let log;
const repeat = (times, value) => Array(times).fill(value);
repeat(3, 'X'); // ['X', 'X', 'X']
/** repeatの上位互換 */
const repeatedly = (times, fn) => {
    return Array(times).fill(null).map((_) => {
        return fn();
    });
};
repeatedly(3, () => Math.floor(Math.random() * 10)); // [8, 5, 8]
repeatedly(3, () => 'X'); // ['X', 'X', 'X']
const invoker = (method, ...targets) => {
    const target = targets.shift();
    return method.apply(target, targets);
};
const reversed = invoker(Array.prototype.reverse, [1, 2, 3]); // [3, 2, 1]
[1, 2, 3].shift(); // 1
[[1, 2, 3]].shift(); // [1, 2, 3]
console.log(log);
