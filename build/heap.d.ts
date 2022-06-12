import { Cmp } from './tree';
import { Pointer } from './pointer';
export declare class Heap<T> implements Iterable<T> {
    private tree;
    constructor(cmp: Cmp<T>, initials?: T[]);
    push(x: T): Pointer<T>;
    /**
     * @throws RangeError
     */
    shift(): T;
    getSize(): number;
    /**
     * @throws RangeError
     */
    i(index: 0): T;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
