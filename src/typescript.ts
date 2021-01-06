// 型引数
const toArray = <T>(...args: T[]) => [...args];
const array1: number[] = toArray(3, 7);

const num1 = [2, 3, 5];

// typeof
type TNum2 = typeof num1;
// const num2: TNum2 = 2;
// -> Type 'number' is not assignable to type 'number[]'.

