"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondWithName = exports.sendReqParam = void 0;
const sendReqParam = (req, res) => {
    const veg = req.params.vagatable;
    res.send(`This is the page for ${veg}`);
};
exports.sendReqParam = sendReqParam;
const respondWithName = (req, res) => {
    res.render('index'); // index.ejs
};
exports.respondWithName = respondWithName;
