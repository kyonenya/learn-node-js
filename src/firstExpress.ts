import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// middleware for logging
app
  .use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next(); // next
  });

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
  .get('/items/:vagatable', (req, res) => {
    // dynamic route
    const veg = req.params.vagatable;
    res.send(`This is the page for ${veg}`);
  })
  .listen(port, () => {
    console.log(`listening... port: ${port}`);
  });
