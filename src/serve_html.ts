import http from 'http';
import httpStatus from 'http-status-codes';
import fs from 'fs';

const port = process.env['WEB_APP_PORT'];
const routes: {
  [k: string]: string
} = {
  '/': 'views/index.html'
};

http
  .createServer((req, res) => {
    const viewPath = `views${req.url}.html`;
    console.log(viewPath);
    console.log(req.url);
    fs.readFile(viewPath, (err, data) => {
      if (err) {
        res.writeHead(httpStatus.NOT_FOUND);
        res.write('<h1>File Not Found.</h1>')
      } else {
        res.writeHead(httpStatus.OK, { 'Content-type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port)
  ;

console.log(`listening... port: ${port}`);
