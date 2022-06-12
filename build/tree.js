"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
class Tree {
    constructor(cmp, initials) {
        this.cmp = cmp;
        this.a = [null];
        for (let i = 0; i < initials.length; i++)
            this.a.push({
                value: initials[i],
                position: i + 1,
                tree: this,
            });
        for (let i = this.getSize() >> 1; i > 0; i--)
            this.down(i);
    }
    swapOnIndex(l1, l2) {
        const p1 = this.a[l1];
        const p2 = this.a[l2];
        this.a[l1] = p2;
        this.a[l2] = p1;
        p2.position = l1;
        p1.position = l2;
    }
    cmpOnIndex(l1, l2) {
        return this.cmp(this.a[l1].value, this.a[l2].value);
    }
    up(self) {
        for (; self > 1;) {
            let prior = self;
            const parent = self >> 1;
            if (this.cmpOnIndex(parent, self) <= 0)
                prior = parent;
            if (prior === parent)
                break;
            this.swapOnIndex(self, parent);
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
            this.swapOnIndex(prior, self);
            self = prior;
        }
        return self;
    }
    getSize() {
        return this.a.length - 1;
    }
    push(x) {
        const node = {
            value: x,
            position: this.getSize() + 1,
            tree: this,
        };
        this.a.push(node);
        this.up(this.getSize());
        return node;
    }
    pop() {
        const node = this.a.pop();
        node.position = null;
        return node;
    }
    remove(node) {
        if (node.position === this.getSize()) {
            this.pop();
            return;
        }
        let self = node.position;
        this.swapOnIndex(self, this.getSize());
        this.pop();
        self = this.up(self);
        self = this.down(self);
    }
    shift() {
        const node = this.a[1];
        this.remove(node);
        return node.value;
    }
    getRoot() {
        return this.a[1].value;
    }
}
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map