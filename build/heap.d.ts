import { Cmp } from './friendly';
import { PointerLike } from './pointer';
export declare class Heap<T> {
    private friendly;
    constructor(cmp: Cmp<T>);
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
}
