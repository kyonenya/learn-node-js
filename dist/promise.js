"use strict";
{
    const promise1 = new Promise((resolve, reject) => {
        resolve(123);
    });
    promise1
        .then((value) => console.log(value)) // 123
        .catch(error => console.error(error));
    const promise2 = new Promise((resolve, reject) => {
        reject('何かひどいことが起きた');
    });
    promise2
        .then(value => console.log(value))
        .catch((error) => console.error(error)); // '何かひどいことが起きた'
    const promise3 = new Promise((resolve, reject) => {
        resolve(456);
    });
    const returnPromise = () => promise3;
    returnPromise() // Promise<number>
        .then((value) => value.toString()) // Promise<string>
        .then((value) => parseInt(value)) // Promise<number>
        .then((value) => console.log(value));
    const promise1b = Promise.resolve(123);
    const promise2b = Promise.reject('何かひどいことが起きた');
}
