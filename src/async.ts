const promise1: Promise<number> = new Promise((resolve, reject) => {
  resolve(123);
});

const returnPromise1 = (): Promise<number> => promise1;

// The return type of an async function or method must be the global Promise<T> type.
async function lazyStringify(): Promise<string> {
  const value: number = await returnPromise1();
  const result = value.toString();
  return result;
}

async function index(): Promise<string> {
  const value = await lazyStringify();
  return value;
}

index().then((value) => console.log(value));
