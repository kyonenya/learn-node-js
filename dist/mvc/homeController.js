"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendIndexHtml = exports.sendPost = exports.respondWithName = exports.sendReqParam = void 0;
const path_1 = __importDefault(require("path"));
const sendReqParam = (req, res) => {
    const veg = req.params.vagatable;
    res.send(`This is the page for ${veg}`);
};
exports.sendReqParam = sendReqParam;
const respondWithName = (req, res) => {
    const name = req.params.myName;
    res.render('index', { name });
};
exports.respondWithName = respondWithName;
const sendPost = (req, res) => {
    console.log(req.body);
    res.send('Post successful!');
};
exports.sendPost = sendPost;
const sendIndexHtml = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '..', '..', 'public', 'index.html'));
};
exports.sendIndexHtml = sendIndexHtml;
