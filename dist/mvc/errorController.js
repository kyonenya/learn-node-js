"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondInternalError = exports.respondNoResourceFound = exports.logErrors = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};
exports.logErrors = logErrors;
const respondNoResourceFound = (req, res) => {
    const errCode = http_status_codes_1.default.NOT_FOUND;
    res.status(errCode);
    res.sendFile('./public/${errCode}.html', { root: './' });
};
exports.respondNoResourceFound = respondNoResourceFound;
const respondInternalError = (err, req, res, next) => {
    console.error(err.stack);
    const errCode = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
    res.status(errCode);
    res.send(`${errCode} | Sorry, our application is experiencing a problem.`);
};
exports.respondInternalError = respondInternalError;
