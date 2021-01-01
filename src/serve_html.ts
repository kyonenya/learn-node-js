import http from 'http';
import httpStatus from 'http-status-codes';
import fs from 'fs';

const port = process.env['WEB_APP_PORT'];
const routes: {
  [k: string]: string
} = {
  '/': 'views/index.html'
};

http.createServer((req, res) => {
  res.writeHead(httpStatus.OK, { 'Content-type': 'text/html' });
  const url = req.url as string;
  if (routes[url]) {
    fs.readFile(routes[url], (err, data) => {
      res.write(data);
      res.end();
    });
  }
});
