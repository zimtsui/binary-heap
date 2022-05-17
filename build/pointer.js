"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyRemoved = exports.Pointer = void 0;
const assert = require("assert");
class Pointer {
    constructor(element, friendly) {
        this.element = element;
        this.friendly = friendly;
    }
    deref() {
        return this.element.value;
    }
    remove() {
        assert(!this.isRemoved(), new AlreadyRemoved('Already removed.'));
        this.friendly.remove(this.element);
    }
    isRemoved() {
        return this.element.location === null;
    }
}
exports.Pointer = Pointer;
class AlreadyRemoved extends Error {
}
exports.AlreadyRemoved = AlreadyRemoved;
//# sourceMappingURL=pointer.js.map