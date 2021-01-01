import express from 'express';
import ejs from 'ejs';
import layouts from 'express-ejs-layouts';
import { sendReqParam, sendPost, respondWithName, sendIndexHtml } from './homeController';
import { logErrors, respondNoResourceFound, respondInternalError } from './errorController';

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // set ejs
app.use(layouts); // use express-ejs-layouts

// encode post data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app
  .get('/', sendIndexHtml)
  .post('/submit', sendPost)
  .get('/items/:vagatable', sendReqParam)
  .get('/name/:myName', respondWithName)
  .use(express.static('public')); // serve static files

app
  .use(logErrors)
  .use(respondNoResourceFound) // 404
  .use(respondInternalError); // 500
  
app.listen(port, () => {
  console.log(`listening... port: ${port}`);
});
