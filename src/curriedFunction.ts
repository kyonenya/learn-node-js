let l;

const curriedCalcTax = (late: number) => (price: number) => price * late;
const japaneseCalcTax = curriedCalcTax(1.08);
const humbergerPrice = japaneseCalcTax(100);
// console.log(humbergerPrice); -> 108

type repositorable = (params: number) => string;
type useCasable = (params: number) => string;
type containable = (repository: repositorable) => useCasable;
type _containable = (repository: repositorable) => (params: number) => string;

const repository: repositorable = (params) => params.toString();
const container: containable = (repository: repositorable) => (params: number) => repository(params);

/**
 * repeat exec
 */
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

/** 
 * invoker
 */
const invoke = (method: Function, ...targets: any) => {
  const target = targets.shift();
  return method.apply(target, targets);
};

invoke(Array.prototype.reverse, [1, 2, 3]); // [3, 2, 1]

const invoker = (method: Function) => (target: unknown[]) => {
  return method.apply(target, [target]);
};

invoker(Array.prototype.reverse)([1, 2, 3]); // [3, 2, 1]

/** 
 * カリー化 割り算
 */
const leftDiv = (n: number) => (d: number) => n / d;
const devide10By = leftDiv(10); // 10 / ?
devide10By(2); // 5

const rightDiv = (d: number) => (n: number) => n / d;
const devideBy10 = rightDiv(10); // ? / 10
devideBy10(2);

/** right curry */
const curry = (fn: Function) => (second: unknown) => (first: unknown) => {
  return fn(first, second);
};

const div = (n: number, d: number) => n / d;
const _divBy10 = curry(div)(10);
_divBy10(2); // 0.2

// -----
[1, 2, 3].shift(); // 1
[[1, 2, 3]].shift(); // [1, 2, 3]

Math.max.apply(null, [1, 2, 3]); // 3

console.log(l);
