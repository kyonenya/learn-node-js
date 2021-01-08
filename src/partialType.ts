
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
const params = { n: 123, s: 'abc'};
// funcB(params); // -> Error S2345 実際に呼び出すときに引数が欠けてはならない
funcB({ n: 123, s: 'abc', b: true }); // OK 使わない引数まで含めて型定義した分すべて揃えて呼んでいる

/** return values */
type nsb = { n: number, s: string, b: boolean };

type G1 = (args: nsb) => { s: string };
const g = (args: nsb) => ({ s: args.s, n: args.n });
type G2 = (args: nsb) => { s: string, n: number, b: boolean };

const func1: G1 = g; // -> OK 返り値は余計なものを付け足してもいい
// const func2: G2 = g; // -> Error 返り値は欠けてはいけない

{

type executable = (sql: string) => void;
type repositorable = ({ execute, param }: {
  execute: executable; // optional
  param: number;
}) => void;
type controllable = (execute: executable, repository: repositorable) => repositorable;

// linter: ts(6385)
const controller: controllable = (execute: executable, repository: repositorable) => {
  const useCase: repositorable = ({ param }: {
    param: number;
  }) => repository({ execute, param });
  return useCase;
};
// useCase(param); =>
const repository: repositorable = ({ execute, param }): void => {
  const sql = `INSERT INTO posts ... VALUES ${param})`;
  return execute(sql);
};
const execute = (sql: string) => null;

}


{

type executable = (sql: string) => void;
type repositorable = ({ execute }: {
  execute: executable; // optional
}) => void;
type controllable = (execute: executable, repository: repositorable) => repositorable;

const controller: controllable = (execute: executable, repository: repositorable) => {
  const useCase: repositorable = ({}) => repository({ execute });
//  const args = {}
//  const re = useCase(args);
  return useCase;
};
// useCase(param); =>
const repository: repositorable = ({ execute }): void => {
  const sql = `INSERT INTO posts ... VALUES`;
  return execute(sql);
};
const execute = (sql: string) => null;

}