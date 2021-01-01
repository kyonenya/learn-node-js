import http, { IncomingMessage, ServerResponse } from 'http';
import httpStatus from 'http-status-codes';

const port = process.env['WEB_APP_PORT'];
const app = http.createServer();

app.on('request', (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(httpStatus.OK, // 200
    { 'Content-Type': 'text/html' }
  );
  console.log(req.method); // GET
  console.log(req.url); // '/works'
  console.log(req.headers);
  let msg = '<h1>Hello World.</h1>';
  res.end(msg);
});

app.listen(port);

console.log(`listening... port: ${port}`);
