{
const promise1: Promise<number> = new Promise((resolve, reject) => {
  resolve(123);
});

promise1
  .then((value: number) => console.log(value)) // 123
  .catch(error => console.error(error));

const promise2: Promise<void> = new Promise((resolve, reject) => {
  reject('何かひどいことが起きた');
});

promise2
  .then(value => console.log(value))
  .catch((error: string) => console.error(error)); // '何かひどいことが起きた'

const promise3: Promise<number> = new Promise((resolve, reject) => {
  resolve(456);
});

const returnPromise = () => promise3;

returnPromise() // Promise<number>
  .then((value: number) => value.toString()) // Promise<string>
  .then((value: string) => parseInt(value)) // Promise<number>
  .then((value: number) => console.log(value));


const promise1b = Promise.resolve(123);
const promise2b = Promise.reject('何かひどいことが起きた');
}