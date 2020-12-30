"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const promise1 = new Promise((resolve, reject) => {
    resolve(123);
});
const returnPromise1 = () => promise1;
// The return type of an async function or method must be the global Promise<T> type.
function lazyStringify() {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield returnPromise1();
        const result = value.toString();
        return result;
    });
}
function index() {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield lazyStringify();
        return value;
    });
}
index().then((value) => console.log(value));
