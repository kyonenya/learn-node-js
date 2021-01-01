"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = 3000;
// middleware for logging
app
    .use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next(); // next
});
// encode post data
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app
    .get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'index.html'));
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
