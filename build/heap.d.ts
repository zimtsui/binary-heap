import { Cmp } from './friendly';
import { PointerLike } from './pointer';
export declare class Heap<T> implements Iterable<T> {
    private friendly;
    constructor(cmp: Cmp<T>, initials?: T[]);
    push(x: T): PointerLike<T>;
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
