"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
class Heap {
    constructor(cmp) {
        this.cmp = cmp;
        this.a = [null];
    }
    swapL(l1, l2) {
        const p1 = this.a[l1];
        const p2 = this.a[l2];
        this.a[l1] = p2;
        this.a[l2] = p1;
        p2.location = l1;
        p1.location = l2;
    }
    cmpL(l1, l2) {
        return this.cmp(this.a[l1].value, this.a[l2].value);
    }
    up(self) {
        for (; self > 1;) {
            let prior = self;
            const parent = self >> 1;
            if (this.cmpL(parent, self))
                prior = parent;
            if (prior === parent)
                break;
            this.swapL(self, parent);
            self = parent;
        }
        return self;
    }
    down(self) {
        for (;;) {
            let prior = self;
            const left = self << 1;
            if (left <= this.n() && this.cmpL(left, prior))
                prior = left;
            const right = self << 1 | 1;
            if (right <= this.n() && this.cmpL(right, prior))
                prior = right;
            if (prior === self)
                break;
            this.swapL(prior, self);
            self = prior;
        }
        return self;
    }
    n() {
        return this.a.length - 1;
    }
    push(x) {
        const p = {
            value: x,
            location: this.n() + 1,
        };
        this.a.push(p);
        this.up(this.n());
        return p;
    }
    pop() {
        const p = this.a.pop();
        p.location = null;
        return p;
    }
    remove(p) {
        if (p.location === this.n()) {
            this.pop();
            return;
        }
        let self = p.location;
        this.swapL(self, this.n());
        this.pop();
        self = this.up(self);
        self = this.down(self);
    }
    shift() {
        const p = this.a[1];
        this.remove(p);
        return p.value;
    }
    getFront() {
        return this.a[1].value;
    }
}
exports.Heap = Heap;
//# sourceMappingURL=friendly.js.map