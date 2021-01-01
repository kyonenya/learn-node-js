import express from 'express';

const app = express();
const port = process.env['WEB_APP_PORT'];

app
  .get('/', (req, res) => {
    res.send('Hello world.');
  })
  .listen(port, () => {
    console.log(`listening... port: ${port}`);
  });
