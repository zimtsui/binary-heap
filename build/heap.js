"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEnoughElem = exports.Heap = void 0;
const friendly_1 = require("./friendly");
const pointer_1 = require("./pointer");
const assert = require("assert");
class Heap {
    constructor(cmp) {
        this.friendly = new friendly_1.Heap(cmp);
    }
    push(x) {
        const p = this.friendly.push(x);
        return new pointer_1.Pointer(p, this.friendly);
    }
    shift() {
        assert(this.friendly.n() > 0, new NoEnoughElem('No enough elements.'));
        return this.friendly.shift();
    }
    size() {
        return this.friendly.n();
    }
    getFront() {
        assert(this.friendly.n() > 0, new NoEnoughElem('No enough elements.'));
        return this.friendly.getFront();
    }
}
exports.Heap = Heap;
class NoEnoughElem extends Error {
}
exports.NoEnoughElem = NoEnoughElem;
//# sourceMappingURL=heap.js.map