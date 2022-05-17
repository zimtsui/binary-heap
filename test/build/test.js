"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const ava_1 = require("ava");
const assert = require("assert");
class Tester {
    constructor(cmp) {
        this.cmp = cmp;
        this.array = [];
        this.heap = new __1.Heap(cmp);
    }
    ;
    push(x) {
        this.heap.push(x);
        this.array.push(x);
    }
    shift() {
        if (this.array.length === 0)
            return;
        const heapX = this.heap.shift();
        const minX = this.array.reduce((min, x) => this.cmp(x, min) < 0 ? x : min);
        const minXIndex = this.array.findIndex(x => x == minX);
        this.array.splice(minXIndex, 1);
        assert.strictEqual(heapX, minX);
    }
}
(0, ava_1.default)('random', async (t) => {
    const tester = new Tester((x1, x2) => x1 - x2);
    for (let i = 0; i < 1000; i++) {
        const op = Math.random() < .9 ? 0 /* PUSH */ : 1 /* SHIFT */;
        if (op === 0 /* PUSH */)
            tester.push(Math.round(Math.random() * 1000000));
        else
            tester.shift();
    }
});
//# sourceMappingURL=test.js.map