"use strict";
/**
 * partial type
 * @url https://www.kabuku.co.jp/developers/learn-subtyping-of-function
 */
const hello = (args) => `Hello! ${args.name}`;
const args = { name: 'John', age: 26 };
hello(args); // -> OK
const f = (args) => ({ s: args.s });
// const funcA: F1 = f; // -> Error TS2322 引数は付け足してはいけない
const funcB = f; // -> OK 引数は欠けてもよい
const params = { n: 123, s: 'abc' };
// funcB(params); // -> Error S2345 実際に呼び出すときに引数が欠けてはならない
funcB({ n: 123, s: 'abc', b: true }); // OK 使わない引数まで含めて型定義した分すべて揃えて呼んでいる
const g = (args) => ({ s: args.s, n: args.n });
const func1 = g; // -> OK 返り値は余計なものを付け足してもいい
// const func2: G2 = g; // -> Error 返り値は欠けてはいけない
{
    // linter: ts(6385)
    const controller = (execute, repository) => {
        const useCase = ({ param }) => repository({ execute, param });
        return useCase;
    };
    // useCase(param); =>
    const repository = ({ execute, param }) => {
        const sql = `INSERT INTO posts ... VALUES ${param})`;
        return execute(sql);
    };
    const execute = (sql) => null;
}
{
    const controller = (execute, repository) => {
        const useCase = ({}) => repository({ execute });
        //  const args = {}
        //  const re = useCase(args);
        return useCase;
    };
    // useCase(param); =>
    const repository = ({ execute }) => {
        const sql = `INSERT INTO posts ... VALUES`;
        return execute(sql);
    };
    const execute = (sql) => null;
}
