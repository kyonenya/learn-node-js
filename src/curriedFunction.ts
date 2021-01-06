const curriedCalcTax = (late: number) => (price: number) => price * late;
const japaneseCalcTax = curriedCalcTax(1.08);
const humbergerPrice = japaneseCalcTax(100);
// console.log(humbergerPrice); -> 108

type dbExecutable = (params: number) => string;
type useCasable = (params: number) => string;
type containable = (execute: dbExecutable) => useCasable;
type _containable = (execute: dbExecutable) => (params: number) => string;

const execute: dbExecutable = (params) => params.toString();
const container: containable = (execute: dbExecutable) => (params: number) => execute(params);

let log;

const repeat = <T>(times: number, value: T): T[] => Array(times).fill(value);
repeat(3, 'X'); // ['X', 'X', 'X']

/** repeatの上位互換 */
const repeatedly = (times: number, fn: Function) => {
  return Array(times).fill(null).map((_) => {
    return fn();
  });
};
repeatedly(3, () => Math.floor(Math.random() * 10)); // [8, 5, 8]
repeatedly(3, () => 'X'); // ['X', 'X', 'X']

const invoker = (method: Function, ...targets: any) => {
  const target = targets.shift();
  return method.apply(target, targets);
};

const reversed = invoker(Array.prototype.reverse, [1, 2, 3]); // [3, 2, 1]

[1, 2, 3].shift(); // 1
[[1, 2, 3]].shift(); // [1, 2, 3]


console.log(log)
