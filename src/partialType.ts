
/**
 * partial type
 * @url https://www.kabuku.co.jp/developers/learn-subtyping-of-function
 */
const hello = (args: { name: string }): string => `Hello! ${args.name}`;
const args = { name: 'John', age: 26 };
hello(args); // -> OK

/**
 * function - partial type
 */
/** arguments */
type F1 = (args: { n: number }) => { s: string };
const f = (args: {n: number, s: string }) => ({ s: args.s });
type F2 = (args: { n: number, s: string, b: boolean }) => { s: string };
// const funcA: F1 = f; // -> Error TS2322 引数は付け足してはいけない
const funcB: F2 = f; // -> OK 引数は欠けてもよい

/** return values */
type nsb = { n: number, s: string, b: boolean };

type G1 = (args: nsb) => { s: string };
const g = (args: nsb) => ({ s: args.s, n: args.n });
type G2 = (args: nsb) => { s: string, n: number, b: boolean };

const func1: G1 = g; // -> OK 返り値は余計なものを付け足してもいい
const func2: G2 = g; // -> Error 返り値は欠けてはいけない
