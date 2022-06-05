"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
class Heap {
    constructor(cmp, initials) {
        this.cmp = cmp;
        this.a = [null];
        for (let i = 0; i < initials.length; i++)
            this.a.push({
                value: initials[i],
                position: i + 1,
            });
        for (let i = this.n() >> 1; i > 0; i--)
            this.down(i);
    }
    swapL(l1, l2) {
        const p1 = this.a[l1];
        const p2 = this.a[l2];
        this.a[l1] = p2;
        this.a[l2] = p1;
        p2.position = l1;
        p1.position = l2;
    }
    cmpL(l1, l2) {
        return this.cmp(this.a[l1].value, this.a[l2].value);
    }
    up(self) {
        for (; self > 1;) {
            let prior = self;
            const parent = self >> 1;
            if (this.cmpL(parent, self) <= 0)
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
            if (left <= this.n() && this.cmpL(left, prior) <= 0)
                prior = left;
            const right = self << 1 | 1;
            if (right <= this.n() && this.cmpL(right, prior) <= 0)
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
        const e = {
            value: x,
            position: this.n() + 1,
        };
        this.a.push(e);
        this.up(this.n());
        return e;
    }
    pop() {
        const e = this.a.pop();
        e.position = null;
        return e;
    }
    remove(e) {
        if (e.position === this.n()) {
            this.pop();
            return;
        }
        let self = e.position;
        this.swapL(self, this.n());
        this.pop();
        self = this.up(self);
        self = this.down(self);
    }
    shift() {
        const e = this.a[1];
        this.remove(e);
        return e.value;
    }
    getFront() {
        return this.a[1].value;
    }
}
exports.Heap = Heap;
//# sourceMappingURL=friendly.js.map