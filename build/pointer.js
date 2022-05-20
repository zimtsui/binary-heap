"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
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
        assert(!this.isRemoved(), new ReferenceError());
        this.friendly.remove(this.element);
    }
    isRemoved() {
        return this.element.location === null;
    }
}
exports.Pointer = Pointer;
//# sourceMappingURL=pointer.js.map