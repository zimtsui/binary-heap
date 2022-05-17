"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEnoughElements = exports.Heap = void 0;
const friendly_1 = require("./friendly");
const pointer_1 = require("./pointer");
const assert = require("assert");
class Heap {
    constructor(cmp) {
        this.friendly = new friendly_1.Heap(cmp);
    }
    push(x) {
        const element = this.friendly.push(x);
        return new pointer_1.Pointer(element, this.friendly);
    }
    shift() {
        assert(this.friendly.n() > 0, new NoEnoughElements('No enough elements.'));
        return this.friendly.shift();
    }
    getSize() {
        return this.friendly.n();
    }
    getFront() {
        assert(this.friendly.n() > 0, new NoEnoughElements('No enough elements.'));
        return this.friendly.getFront();
    }
}
exports.Heap = Heap;
class NoEnoughElements extends Error {
}
exports.NoEnoughElements = NoEnoughElements;
//# sourceMappingURL=heap.js.map