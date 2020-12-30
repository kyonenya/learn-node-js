const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchURL = (url: string) => {
  return new Promise((resolve, reject) => {
    const req = new xmlHttpRequest();
    req.open('GET', url, true);
    req.onload = () => {
      if (200 <= req.status && req.status < 300) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      };
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  });
};

const url = 'https://httpbin.org/get';
fetchURL(url)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });



const asyncFunction = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async Hello world');
    }, 1000)
  });
};

asyncFunction()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
