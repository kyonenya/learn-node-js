"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const fs_1 = __importDefault(require("fs"));
const port = process.env['WEB_APP_PORT'];
const routes = {
    '/': 'views/index.html'
};
http_1.default
    .createServer((req, res) => {
    const viewPath = `views${req.url}.html`;
    fs_1.default.readFile(viewPath, (err, data) => {
        if (err) {
            res.writeHead(http_status_codes_1.default.NOT_FOUND);
            res.write('<h1>File Not Found.</h1>');
        }
        else {
            res.writeHead(http_status_codes_1.default.OK, { 'Content-type': 'text/html' });
            res.write(data);
        }
        res.end();
    });
})
    .listen(port);
console.log(`listening... port: ${port}`);
