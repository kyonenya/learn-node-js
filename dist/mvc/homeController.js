"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondWithName = exports.sendReqParam = void 0;
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
