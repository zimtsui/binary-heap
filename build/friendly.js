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
        for (;;) {
            let min = self;
            const parent = self >> 1;
            if (parent > 0 && this.cmpL(min, parent))
                min = parent;
            if (min === self)
                break;
            this.swapL(min, self);
            self = min;
        }
        return self;
    }
    down(self) {
        for (;;) {
            let min = self;
            const left = self << 1;
            if (left <= this.n() && this.cmpL(left, min))
                min = left;
            const right = self << 1 | 1;
            if (right <= this.n() && this.cmpL(right, min))
                min = right;
            if (min === self)
                break;
            this.swapL(min, self);
            self = min;
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
    remove(p) {
        let self = p.location;
        p.location = null;
        if (self === this.n()) {
            this.a.pop();
            return;
        }
        this.a[self] = this.a.pop();
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