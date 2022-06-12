"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Pointer = void 0;
const assert = require("assert");
class Pointer {
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
class constructor extends Pointer {
    constructor(node) {
        super();
        this.node = node;
    }
}
function create(node) {
    return new constructor(node);
}
exports.create = create;
//# sourceMappingURL=pointer.js.map