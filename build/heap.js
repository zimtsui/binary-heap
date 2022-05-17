"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
const friendly_1 = require("./friendly");
const pointer_1 = require("./pointer");
const sequence_interfaces_1 = require("sequence-interfaces");
const assert = require("assert");
class Heap {
    constructor(cmp) {
        this.friendly = new friendly_1.Heap(cmp);
    }
    push(x) {
        const element = this.friendly.push(x);
        return new pointer_1.Pointer(element, this.friendly);
    }
    isEmpty() {
        return this.friendly.n() === 0;
    }
    shift() {
        assert(this.friendly.n() > 0, new sequence_interfaces_1.NoEnoughElements());
        return this.friendly.shift();
    }
    getSize() {
        return this.friendly.n();
    }
    getFront() {
        assert(this.friendly.n() > 0, new sequence_interfaces_1.NoEnoughElements());
        return this.friendly.getFront();
    }
}
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map