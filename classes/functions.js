"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.build = exports.version = exports.Vector2 = void 0;
function Vector2(x, y) {
    this.x = (x === undefined) ? 0 : x;
    this.y = (y === undefined) ? 0 : y;
}
exports.Vector2 = Vector2;
const version = "0.1.3";
exports.version = version;
const build = "2022.03-3";
exports.build = build;
function start() {
    console.log("-----------------------------------------------------------");
    console.log(" Javascript Game Framework v" + version + " - Build " + build);
    console.log("-----------------------------------------------------------");
}
exports.start = start;
