"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.Vector2 = void 0;
function Vector2(x, y) {
    this.x = (x === undefined) ? 0 : x;
    this.y = (y === undefined) ? 0 : y;
}
exports.Vector2 = Vector2;
const version = "0.2.2";
const build = "2022.03-11";
function start() {
    console.log("-----------------------------------------------------------");
    console.log("          Game.js v" + version + " - Build " + build);
    console.log("-----------------------------------------------------------");
}
exports.start = start;
