import http from 'http';
import httpStatus from 'http-status-codes';
import fs from 'fs';
import * as router from './serveHtml_router';

const port = process.env['WEB_APP_PORT'];
const htmlContentType = { 'Content-type': 'text/html' };

const plainTextContentType = { 'Content-type': 'text/plain' };

router.setRoutes('/', 'GET', (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end('Index Page');
});

http
  .createServer(router.handle)
  .listen(port);

console.log(`listening... port: ${port}`);
