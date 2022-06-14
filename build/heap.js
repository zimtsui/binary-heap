"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.Heap = void 0;
const assert = require("assert");
class Heap {
    constructor(cmp, initials = []) {
        this.cmp = cmp;
        this.a = [null];
        for (let i = 0; i < initials.length; i++)
            this.a.push(new Node(initials[i], i + 1, this));
        for (let i = this.getSize() >> 1; i > 0; i--)
            this.down(i);
    }
    swap(i1, i2) {
        const node1 = this.a[i1];
        const node2 = this.a[i2];
        this.a[i1] = node2;
        this.a[i2] = node1;
        node2.i = i1;
        node1.i = i2;
    }
    cmpOnIndex(i1, i2) {
        return this.cmp(this.a[i1].x, this.a[i2].x);
    }
    up(self) {
        for (; self > 1;) {
            let prior = self;
            const parent = self >> 1;
            if (this.cmpOnIndex(parent, self) <= 0)
                prior = parent;
            if (prior === parent)
                break;
            this.swap(self, parent);
            self = parent;
        }
        return self;
    }
    down(self) {
        for (;;) {
            let prior = self;
            const left = self << 1;
            if (left <= this.getSize() && this.cmpOnIndex(left, prior) <= 0)
                prior = left;
            const right = self << 1 | 1;
            if (right <= this.getSize() && this.cmpOnIndex(right, prior) <= 0)
                prior = right;
            if (prior === self)
                break;
            this.swap(prior, self);
            self = prior;
        }
        return self;
    }
    getSize() {
        return this.a.length - 1;
    }
    insert(x) {
        const node = new Node(x, this.getSize() + 1, this);
        this.a.push(node);
        this.up(node.i);
        return node;
    }
    pop() {
        const node = this.a.pop();
        node.i = null;
        return node;
    }
    remove(node) {
        let self = node.i;
        this.swap(self, this.getSize());
        this.pop();
        if (self > this.getSize())
            return;
        self = this.up(self);
        self = this.down(self);
    }
    removeRoot() {
        const node = this.a[1];
        this.remove(node);
        return node;
    }
    getRoot() {
        return this.a[1];
    }
    // Priority Queue
    /**
     * @throws RangeError
     */
    i(index) {
        assert(this.getSize() > 0, new RangeError());
        return this.getRoot().x;
    }
    push(x) {
        return this.insert(x);
    }
    /**
     * @throws RangeError
     */
    shift() {
        assert(this.getSize() > 0, new RangeError());
        return this.removeRoot().x;
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
class FriendlyHeap extends Heap {
}
class Node {
    constructor(x, i, h) {
        this.x = x;
        this.i = i;
        this.h = h;
    }
    deref() {
        return this.x;
    }
    /**
     * @throws ReferenceError
     */
    remove() {
        assert(!this.isRemoved(), new ReferenceError());
        this.h.remove(this);
    }
    isRemoved() {
        return this.i === null;
    }
}
exports.Node = Node;
class FriendlyNode extends Node {
}
//# sourceMappingURL=heap.js.map