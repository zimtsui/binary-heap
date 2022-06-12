"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
const assert = require("assert");
class Pointer {
    constructor(node) {
        this.node = node;
    }
    deref() {
        return this.node.value;
    }
    /**
     * @throws ReferenceError
     */
    remove() {
        assert(!this.isRemoved(), new ReferenceError());
        this.node.tree.remove(this.node);
    }
    isRemoved() {
        return this.node.position === null;
    }
}
exports.Pointer = Pointer;
//# sourceMappingURL=pointer.js.map