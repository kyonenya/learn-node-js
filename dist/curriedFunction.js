"use strict";
let l;
const curriedCalcTax = (late) => (price) => price * late;
const japaneseCalcTax = curriedCalcTax(1.08);
const humbergerPrice = japaneseCalcTax(100);
const execute = (params) => params.toString();
const container = (execute) => (params) => execute(params);
/**
 * repeat exec
 */
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
/**
 * invoker
 */
const invoke = (method, ...targets) => {
    const target = targets.shift();
    return method.apply(target, targets);
};
invoke(Array.prototype.reverse, [1, 2, 3]); // [3, 2, 1]
const invoker = (method) => (target) => {
    return method.apply(target, [target]);
};
invoker(Array.prototype.reverse)([1, 2, 3]); // [3, 2, 1]
/**
 * カリー化 割り算
 */
const leftDiv = (n) => (d) => n / d;
const devide10By = leftDiv(10); // 10 / ?
devide10By(2); // 5
const rightDiv = (d) => (n) => n / d;
const devideBy10 = rightDiv(10); // ? / 10
devideBy10(2);
/** right curry */
const curry = (fn) => (second) => (first) => {
    return fn(first, second);
};
const div = (n, d) => n / d;
const _divBy10 = curry(div)(10);
_divBy10(2); // 0.2
// -----
[1, 2, 3].shift(); // 1
[[1, 2, 3]].shift(); // [1, 2, 3]
Math.max.apply(null, [1, 2, 3]); // 3
console.log(l);
