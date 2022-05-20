import { Cmp } from './friendly';
import { PointerLike } from './pointer';
export declare class Heap<T> {
    private friendly;
    constructor(cmp: Cmp<T>);
    push(x: T): PointerLike<T>;
    shift(): T;
    getSize(): number;
    getFront(): T;
}
