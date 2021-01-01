"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const port = process.env['WEB_APP_PORT'];
const app = http_1.default.createServer();
app.on('request', (req, res) => {
    res.writeHead(http_status_codes_1.default.OK, // 200
    { 'Content-Type': 'text/html' });
    console.log(req.method); // GET
    console.log(req.url); // '/works'
    console.log(req.headers);
    let msg = '<h1>Hello World.</h1>';
    res.end(msg);
});
app.listen(port);
console.log(`listening... port: ${port}`);
