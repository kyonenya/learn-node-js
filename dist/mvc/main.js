"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const homeController_1 = require("./homeController");
const errorController_1 = require("./errorController");
const app = express_1.default();
const port = 3000;
app.set('view engine', 'ejs'); // set ejs
app.use(express_ejs_layouts_1.default); // use express-ejs-layouts
// encode post data
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app
    .get('/', homeController_1.sendIndexHtml)
    .post('/submit', homeController_1.sendPost)
    .get('/items/:vagatable', homeController_1.sendReqParam)
    .get('/name/:myName', homeController_1.respondWithName)
    .use(express_1.default.static('public')); // serve static files
app
    .use(errorController_1.logErrors)
    .use(errorController_1.respondNoResourceFound) // 404
    .use(errorController_1.respondInternalError); // 500
app.listen(port, () => {
    console.log(`listening... port: ${port}`);
});
