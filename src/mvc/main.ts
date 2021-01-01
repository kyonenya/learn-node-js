import express from 'express';
import ejs from 'ejs';
import layouts from 'express-ejs-layouts';
import path from 'path';
import { sendReqParam, respondWithName } from './homeController';

const app = express();
const port = 3000;

// set ejs
app.set('view engine', 'ejs');
// use express-ejs-layouts
app.use(layouts);

// encode post data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app
  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  })
  .post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Post successful!');
  })
  .get('/items/:vagatable', sendReqParam)
  .get('/name/:myName', respondWithName)
  .listen(port, () => {
    console.log(`listening... port: ${port}`);
  });

// middleware for logging
app
  .use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next(); // next
});
