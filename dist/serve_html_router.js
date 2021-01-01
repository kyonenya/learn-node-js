"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.setRoutes = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const htmlContentType = { 'Content-type': 'text/html' };
const routes = {
    'GET': {
        '/info': (req, res) => {
            res.writeHead(http_status_codes_1.default.OK, { 'Content-type': 'text/plain' });
            res.end('Welcome to the Info Page!');
        }
    },
    'POST': {},
};
const setRoutes = (url, method, action) => {
    routes[method][url] = action;
};
exports.setRoutes = setRoutes;
const handle = (req, res) => {
    try {
        const method = req.method;
        const url = req.url;
        if (routes[method][url]) {
            routes[method][url](req, res);
        }
        else {
            res.writeHead(http_status_codes_1.default.NOT_FOUND, htmlContentType);
            res.end('<h1>No such file exists.</h1>');
        }
    }
    catch (err) {
        console.error(`error: ${err}`);
    }
};
exports.handle = handle;
