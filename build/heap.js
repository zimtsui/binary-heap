"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
const tree_1 = require("./tree");
const pointer_1 = require("./pointer");
const assert = require("assert");
class Heap {
    constructor(cmp, initials = []) {
        this.tree = new tree_1.Tree(cmp, initials);
    }
    push(x) {
        const node = this.tree.push(x);
        return (0, pointer_1.create)(node);
    }
    /**
     * @throws RangeError
     */
    shift() {
        assert(this.tree.getSize() > 0, new RangeError());
        return this.tree.shift();
    }
    getSize() {
        return this.tree.getSize();
    }
    /**
     * @throws RangeError
     */
    i(index) {
        assert(this.tree.getSize() > 0, new RangeError());
        return this.tree.getRoot();
    }
    *[Symbol.iterator]() {
        try {
            for (;;)
                yield this.shift();
        }
        catch (err) { }
    }
}
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map