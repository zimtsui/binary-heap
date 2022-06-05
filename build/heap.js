"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
const friendly_1 = require("./friendly");
const pointer_1 = require("./pointer");
const assert = require("assert");
class Heap {
    constructor(cmp, initials = []) {
        this.friendly = new friendly_1.Heap(cmp, initials);
    }
    push(x) {
        const element = this.friendly.push(x);
        return new pointer_1.Pointer(element, this.friendly);
    }
    /**
     * @throws RangeError
     */
    shift() {
        assert(this.friendly.n() > 0, new RangeError());
        return this.friendly.shift();
    }
    getSize() {
        return this.friendly.n();
    }
    /**
     * @throws RangeError
     */
    i(index) {
        assert(this.friendly.n() > 0, new RangeError());
        return this.friendly.getFront();
    }
}
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map