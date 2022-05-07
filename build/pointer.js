"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyRemoved = exports.Pointer = void 0;
const assert = require("assert");
class Pointer {
    constructor(friendly, heap) {
        this.friendly = friendly;
        this.heap = heap;
    }
    deref() {
        return this.friendly.value;
    }
    remove() {
        assert(!this.isRemoved(), new AlreadyRemoved('Already removed.'));
        this.heap.remove(this.friendly);
    }
    isRemoved() {
        return this.friendly.location === null;
    }
}
exports.Pointer = Pointer;
class AlreadyRemoved extends Error {
}
exports.AlreadyRemoved = AlreadyRemoved;
//# sourceMappingURL=pointer.js.map