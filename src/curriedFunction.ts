const curriedCalcTax = (late: number) => (price: number) => price * late;
const japaneseCalcTax = curriedCalcTax(1.08);
const humbergerPrice = japaneseCalcTax(100);
console.log(humbergerPrice);


type dbExecutable = (params: number) => string;
type useCasable = (params: number) => string;
type containable = (execute: dbExecutable) => useCasable;
type _containable = (execute: dbExecutable) => (params: number) => string;

const execute: dbExecutable = (params) => params.toString();
const container: containable = (execute: dbExecutable) => (params: number) => execute(params);
