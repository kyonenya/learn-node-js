"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
const homeController_1 = require("./homeController");
const app = express_1.default();
const port = 3000;
// set ejs
app.set('view engine', 'ejs');
// use express-ejs-layouts
app.use(express_ejs_layouts_1.default);
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
    .get('/items/:vagatable', homeController_1.sendReqParam)
    .get('/name/:myName', homeController_1.respondWithName)
    .listen(port, () => {
    console.log(`listening... port: ${port}`);
});
// middleware for logging
app
    .use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next(); // next
});
